//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Blog.css";
import blogIMG1 from "../img/blog/blog-1.jpg";
import blogIMG2 from "../img/blog/blog-2.jpg";
import blogIMG3 from "../img/blog/blog-3.jpg";
import blogIMG4 from "../img/blog/blog-4.jpg";
import blogRecent1 from "../img/blog/blog-recent-1.jpg";
import blogRecent2 from "../img/blog/blog-recent-2.jpg";
import blogRecent3 from "../img/blog/blog-recent-3.jpg";
import blogRecent4 from "../img/blog/blog-recent-4.jpg";
import blogRecent5 from "../img/blog/blog-recent-5.jpg";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Blog() {
  const { t } = useTranslation();

  const [posts] = useState([
    {
      id: 1,
      src: blogIMG1,
      title: "blog.posts.0.title",
      author: "blog.posts.0.author",
      date: "blog.posts.0.date",
      description: "blog.posts.0.description",
    },
    {
      id: 2,
      src: blogIMG2,
      title: "blog.posts.1.title",
      author: "blog.posts.1.author",
      date: "blog.posts.1.date",
      description: "blog.posts.1.description",
    },
    {
      id: 3,
      src: blogIMG3,
      title: "blog.posts.2.title",
      author: "blog.posts.2.author",
      date: "blog.posts.2.date",
      description: "blog.posts.2.description",
    },
    {
      id: 4,
      src: blogIMG4,
      title: "blog.posts.3.title",
      author: "blog.posts.3.author",
      date: "blog.posts.3.date",
      description: "blog.posts.3.description",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>{t("page_titles.blog")}</title>
      </Helmet>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              {posts.map((post) => {
                const singleUrl = `/Tech-Museum/blog/single/${post.id}`;
                return (
                  <article className="entry" key={post.id}>
                    <div className="entry-img">
                      <img src={post.src} alt="" className="img-fluid" />
                    </div>

                    <h2 className="entry-title">
                      <Link to={singleUrl}>{t(post.title)}</Link>
                    </h2>

                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-person"></i> {t(post.author)}
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-clock"></i>{" "}
                          <time dateTime="2020-01-01">{t(post.date)}</time>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="bi bi-chat-dots"></i> 12{" "}
                          {t("blog.comments")}
                        </li>
                      </ul>
                    </div>

                    <div className="entry-content">
                      <p>{t(post.description)}</p>
                      <div className="read-more">
                        <Link to={singleUrl}>{t("blog.read_more")}</Link>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">{t("blog.search")}</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>

                <h3 className="sidebar-title">{t("blog.categories")}</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.0")}
                        <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.1")}
                        <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.2")}
                        <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.3")}
                        <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.4")}
                        <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {t("blog.all_categories.5")}
                        <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="sidebar-title">{t("blog.recent_posts")}</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src={blogRecent1} alt="" />
                    <h4>
                      <a href="#">{t("blog.all_recent_posts.0.title")}</a>
                    </h4>
                    <time dateTime="#">
                      {t("blog.all_recent_posts.0.date")}
                    </time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blogRecent2} alt="" />
                    <h4>
                      <a href="#">{t("blog.all_recent_posts.1.title")}</a>
                    </h4>
                    <time dateTime="#">
                      {t("blog.all_recent_posts.1.date")}
                    </time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blogRecent3} alt="" />
                    <h4>
                      <a href="#">{t("blog.all_recent_posts.2.title")}</a>
                    </h4>
                    <time dateTime="#">
                      {t("blog.all_recent_posts.2.date")}
                    </time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blogRecent4} alt="" />
                    <h4>
                      <a href="#">{t("blog.all_recent_posts.3.title")}</a>
                    </h4>
                    <time dateTime="2020-01-01">
                      {t("blog.all_recent_posts.3.date")}
                    </time>
                  </div>

                  <div className="post-item clearfix">
                    <img src={blogRecent5} alt="" />
                    <h4>
                      <a href="#">{t("blog.all_recent_posts.4.title")}</a>
                    </h4>
                    <time dateTime="2020-01-01">
                      {t("blog.all_recent_posts.4.date")}
                    </time>
                  </div>
                </div>

                <h3 className="sidebar-title">{t("blog.tags")}</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li>
                      <a href="#">{t("blog.all_tags.0")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.1")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.2")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.3")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.4")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.5")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.6")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.7")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.8")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.9")}</a>
                    </li>
                    <li>
                      <a href="#">{t("blog.all_tags.10")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
