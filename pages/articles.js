import React, { useContext } from "react";
import Head from "next/head";
import { fetchAPI } from "../lib/api";
import { GlobalContext } from "../pages/_app";
import stylesheet from "styles/main.scss";
import Image from "../components/Image";
import format from "date-fns/format";
import NavBar from "../components/NavBar";

const Articles = ({ articles }) => {
  const { siteName } = useContext(GlobalContext);
  console.log(articles);
  return (
    <div>
      <Head>
        <title>{siteName}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
          rel="stylesheet"
        />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <NavBar />
      <div id="wrapper" className="articles-wrapper">
        <div id="articles">
          <div id="blog-page-title">
            <h1>Miriam's Blog</h1>
          </div>
          {articles.map((article) => {
            return (
              <div
                className="article-container"
                key={`${article.id}-${article.slug}`}
                title={article.title}
              >
                <div className="article-image-container">
                  <Image image={article.image} />
                </div>
                <div className="article-meta-container">
                  <h2 className="article-title-container">{article.title}</h2>
                  <div>
                    {format(new Date(article.publishedAt), "MMMM do, yyyy")}
                  </div>
                  <div>{article.author.name}</div>
                  <div>{article.category.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="bg" />
    </div>
  );
};

export async function getStaticProps() {
  const articles = await fetchAPI("/articles?status=published");

  return {
    props: { articles },
    revalidate: 1,
  };
}

export default Articles;
