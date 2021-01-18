import Head from "next/head";
import stylesheet from "styles/main.scss";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../pages/_app";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const IndexPage = () => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeoutState(!timeout);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeoutState(!timeout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle("");
    }, 350);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading("");
    }, 100);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? "is-article-visible" : ""
      }`}
    >
      <div>
        <Head>
          <title>{siteName}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
            rel="stylesheet"
          />
        </Head>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>

        <div id="bg" />
      </div>
    </div>
  );
};

export default IndexPage;
