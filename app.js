const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors("*"));

app.get("/", (req, res) => {
  res.json({
    message: "nice",
    data: [
      {
        userId: 2,
        id: 21,
        title: "suscipit repellat esse quibusdam voluptatem incidunt",
        completed: false,
      },
      {
        userId: 2,
        id: 22,
        title: "distinctio vitae autem nihil ut molestias quo",
        completed: true,
      },
      {
        userId: 2,
        id: 23,
        title: "et itaque necessitatibus maxime molestiae qui quas velit",
        completed: false,
      },
      {
        userId: 2,
        id: 24,
        title: "adipisci non ad dicta qui amet quaerat doloribus ea",
        completed: false,
      },
      {
        userId: 2,
        id: 25,
        title: "voluptas quo tenetur perspiciatis explicabo natus",
        completed: true,
      },
      {
        userId: 2,
        id: 26,
        title: "aliquam aut quasi",
        completed: true,
      },
      {
        userId: 2,
        id: 27,
        title: "veritatis pariatur delectus",
        completed: true,
      },
      {
        userId: 2,
        id: 28,
        title: "nesciunt totam sit blanditiis sit",
        completed: false,
      },
      {
        userId: 2,
        id: 29,
        title: "laborum aut in quam",
        completed: false,
      },
      {
        userId: 2,
        id: 30,
        title:
          "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        completed: true,
      },
      {
        userId: 2,
        id: 31,
        title: "repudiandae totam in est sint facere fuga",
        completed: false,
      },
      {
        userId: 2,
        id: 32,
        title: "earum doloribus ea doloremque quis",
        completed: false,
      },
      {
        userId: 2,
        id: 33,
        title: "sint sit aut vero",
        completed: false,
      },
      {
        userId: 2,
        id: 34,
        title: "porro aut necessitatibus eaque distinctio",
        completed: false,
      },
      {
        userId: 2,
        id: 35,
        title: "repellendus veritatis molestias dicta incidunt",
        completed: true,
      },
      {
        userId: 2,
        id: 36,
        title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
        completed: true,
      },
      {
        userId: 2,
        id: 37,
        title: "sunt cum tempora",
        completed: false,
      },
      {
        userId: 2,
        id: 38,
        title: "totam quia non",
        completed: false,
      },
      {
        userId: 2,
        id: 39,
        title:
          "doloremque quibusdam asperiores libero corrupti illum qui omnis",
        completed: false,
      },
      {
        userId: 2,
        id: 40,
        title: "totam atque quo nesciunt",
        completed: true,
      },
      {
        userId: 3,
        id: 41,
        title:
          "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        completed: false,
      },
      {
        userId: 3,
        id: 42,
        title: "rerum perferendis error quia ut eveniet",
        completed: false,
      },
      {
        userId: 3,
        id: 43,
        title: "tempore ut sint quis recusandae",
        completed: true,
      },
      {
        userId: 3,
        id: 44,
        title:
          "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
        completed: true,
      },
      {
        userId: 3,
        id: 45,
        title: "velit soluta adipisci molestias reiciendis harum",
        completed: false,
      },
      {
        userId: 3,
        id: 46,
        title: "vel voluptatem repellat nihil placeat corporis",
        completed: false,
      },
      {
        userId: 3,
        id: 47,
        title: "nam qui rerum fugiat accusamus",
        completed: false,
      },
      {
        userId: 3,
        id: 48,
        title: "sit reprehenderit omnis quia",
        completed: false,
      },
      {
        userId: 3,
        id: 49,
        title:
          "ut necessitatibus aut maiores debitis officia blanditiis velit et",
        completed: false,
      },
      {
        userId: 3,
        id: 50,
        title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
        completed: true,
      },
      {
        userId: 3,
        id: 51,
        title: "distinctio exercitationem ab doloribus",
        completed: false,
      },
      {
        userId: 3,
        id: 52,
        title: "nesciunt dolorum quis recusandae ad pariatur ratione",
        completed: false,
      },
    ],
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
