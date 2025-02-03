import { Button, Container } from "@mui/material";
import TextEditor from "../molecules/TextEditor";
import { useState } from "react";
import Blogs from "../molecules/Blogs";

const Blog = () => {
  const [showBlog, setShowBlogs] = useState<boolean>(false);

  return (
    <Container sx={{marginTop : 3}}>
      <Button
        onClick={() => {
          setShowBlogs(true);
        }}
      >
        Create Blog
      </Button>

      {showBlog ? <TextEditor /> : <Blogs />}
    </Container>
  );
};

export default Blog;
