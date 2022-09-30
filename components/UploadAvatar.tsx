import React, {forwardRef, useEffect, useState} from "react";
import {
  PlasmicUploadAvatar,
  DefaultUploadAvatarProps
} from "./plasmic/whats_up_clone/PlasmicUploadAvatar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from "../utils/supabaseClient";

export interface UploadAvatarProps extends DefaultUploadAvatarProps {}

interface IProps {
  loading: boolean;
  url: string;

  onUpload: () => void;
}


function UploadAvatar_({onUpload, loading, url, ...props}: IProps, ref: HTMLElementRefOf<"div">) {
  const [uploadError, setUploadError] = useState<string>('')
  const [uploading, setUploading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string | null>('')

  useEffect(() => {
    setAvatarUrl(url)
  }, [url])

  useEffect(() => {
    setUploading(loading)
  }, [loading])

  const uploadAvatar = async (e: any) => {
    try {
      setUploading(true);
      setUploadError("");

      if(!e.target.files || e.target.files.length === 0) {
        setUploadError("Please select a particular file to upload!")
      }

      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let {error} = await supabase.storage.from('avatars').upload(filePath, file);
      if (error) {
        setUploadError(error?.message)
        return
      }

      let {publicURL, error: publicUrlError} = await supabase.storage.from('avatars').getPublicUrl(filePath)
      if (publicUrlError) {
        setUploadError(publicUrlError?.message)
        return;
      }

      setAvatarUrl(publicURL);
      onUpload && onUpload(publicURL);

    } catch (err: any) {
      setUploadError(err.message)
    } finally {
      setUploading(false);
    }

  }

  return (
    <PlasmicUploadAvatar
      root={{
        wrapChildren: (children) => {
          return (
            <label htmlFor="userProfileAvatar">
              {children}
              <input
                id="userProfileAvatar"
                type="file"
                accept="image/*"
                onChange={uploadAvatar}
                disabled={uploading}
                style={{display: "none"}}
              />
            </label>
          )
        }
      }}
      {...props}
      isError={!!uploadError}
      errorMessage={uploadError}
      uploading={uploading}
      avatar={{
        imageUrl: avatarUrl || ''
      }}
    />
  );
}

const UploadAvatar = forwardRef(UploadAvatar_);
export default UploadAvatar;
