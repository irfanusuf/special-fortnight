import { Container } from "@mui/material";
import { useEffect } from "react";
import BlogCard from "../atoms/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/Actions";
import { AppDispatch } from "../../redux/Store";

const Blogs = () => {
  const blogs = useSelector((state: any) => state.user.blogs);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <Container sx={{display : "flex", gap : 3}}>
      {blogs.map(() => 
        <BlogCard />

        //   <div
        //     className="ck-content main-content"
        //     dangerouslySetInnerHTML={{ __html: blog.content }}
        //   />
 
      )}
    </Container>
  );
};

export default Blogs;
