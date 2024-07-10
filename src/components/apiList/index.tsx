import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const details = localStorage.getItem("userDetails");
    if (details) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            setPosts(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  console.log("🚀 ~ ApiList ~ posts:", posts);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 400 },
    { field: "body", headerName: "Description", width: 800 },
  ];

  return <DataGrid rows={posts} columns={columns} autoPageSize />;
};

export default ApiList;
