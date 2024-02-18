import React, { useCallback, useEffect } from 'react';
import dataBaseService from '../../appwrite/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, Button, Textarea} from '../../components';

function PostForm({ post }) { 
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.id || "",
      content: post?.content || "",
    }
  });
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    console.log(data);
    if(post) {
      const file = await dataBaseService.uploadFile(data.file[0]);
      if(file)  {
        dataBaseService.deleteFile(post.featuredImage);
      }
      const dbPost = await dataBaseService.updatePost( post.$id, {
        ...data,
        featuredImage: file?.$id || undefined
      })
      if(dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await dataBaseService.uploadFile(data.file[0]);
      if(file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dpPost = await dataBaseService.createPost({
          ...data,
          userId: userData.$id
        });
        if(dpPost) {
          navigate(`post/${dpPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if(name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true })

      }
    });

    return () => subscription.unsubscribe();

  }, [slugTransform, watch, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-full px-2">
      <Input 
      label = "Title: "
      placeholder="Title"
      className = "mb-4"
      {...register("title", {
        required: true,
      })}
      />
      <Input 
      label="Slug: "
      placeholder="Slug"
      className="mb-4"
      {...register("slug", {
        required: true,
      })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
      }} />
      <Input 
      label="Tweet: "
      className=""
      maxLength="200" 
      minLength="10" 
      placeholder="What is happening?!" 
      {...register("content", {
        required: true,
      })}
      />
      </div>
      <div className="w-full px-2 my-1">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
    
  </form>
  );
}

export default PostForm

{/* <div className="whatishapp flex gap-4 my-3">
      <div className="img m-2 w-16">
        <img src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png" alt="" />
      </div>
      <div className="w-full">
        <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text" placeholder="What is happening?!" />
        <div cl assName="text-blue-400 flex items-center gap-1 w-full my-4">
          <span className="material-symbols-outlined">globe_asia</span>
          <span className="font-bold">Everyone can reply</span>
        </div>
        <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
        <div className="flex justify-between">
          <div className="blueicons flex gap-2 text-blue-400 items-center">
            <span className="material-symbols-outlined cursor-pointer">image</span>
            <span className="material-symbols-outlined cursor-pointer">gif</span>
            <span className="material-symbols-outlined cursor-pointer">ballot</span>
            <span className="material-symbols-outlined cursor-pointer">sentiment_satisfied</span>
            <span className="material-symbols-outlined cursor-pointer">calendar_month</span>
            <span className="material-symbols-outlined cursor-pointer">pin_drop</span>
          </div>
          <div className="postbtn">
            <button className="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold">Post</button>
          </div>
        </div>
      </div>
    </div> */}