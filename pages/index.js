import { Box, Paper, SimpleGrid } from "@mantine/core";
import Link from "next/link";
import { Layout } from "../component/layout";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <>
      <Layout title="MyBlog">
        <SimpleGrid>
          <ul>
            {blog.map((blog) => (
              <Box key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>
                    <Paper shadow="xs" p="md">
                      {blog.title}
                    </Paper>
                  </a>
                </Link>
              </Box>
            ))}
          </ul>
        </SimpleGrid>
      </Layout>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
