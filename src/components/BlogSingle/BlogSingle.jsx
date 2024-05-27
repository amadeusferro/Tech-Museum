/*
Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
*/

import "./BlogSingle.css";

import post1InsideIMG1 from "../img/blog/blog-1.jpg";
import post1InsideIMG2 from "../img/blog/blog-inside-post.jpg";
import post1CommentIMG1 from "../img/blog/comments-1.jpg";
import post1CommentIMG2 from "../img/blog/comments-2.jpg";
import post1CommentIMG3 from "../img/blog/comments-3.jpg";
import post1CommentIMG4 from "../img/blog/comments-4.jpg";
import post1CommentIMG5 from "../img/blog/comments-5.jpg";
import post1CommentIMG6 from "../img/blog/comments-6.jpg";
import post1AuthorIMG from "../img/blog/blog-author.jpg";
//
import post2InsideIMG1 from "../img/blog/blog-2.jpg";
import post2InsideIMG2 from "../img/blog/blog-inside-post.jpg";
import post2CommentIMG1 from "../img/blog/comments-1.jpg";
import post2CommentIMG2 from "../img/blog/comments-2.jpg";
import post2CommentIMG3 from "../img/blog/comments-3.jpg";
import post2CommentIMG4 from "../img/blog/comments-4.jpg";
import post2CommentIMG5 from "../img/blog/comments-5.jpg";
import post2CommentIMG6 from "../img/blog/comments-6.jpg";
import post2AuthorIMG from "../img/blog/blog-author.jpg";
//
import post3InsideIMG1 from "../img/blog/blog-3.jpg";
import post3InsideIMG2 from "../img/blog/blog-inside-post.jpg";
import post3CommentIMG1 from "../img/blog/comments-1.jpg";
import post3CommentIMG2 from "../img/blog/comments-2.jpg";
import post3CommentIMG3 from "../img/blog/comments-3.jpg";
import post3CommentIMG4 from "../img/blog/comments-4.jpg";
import post3CommentIMG5 from "../img/blog/comments-5.jpg";
import post3CommentIMG6 from "../img/blog/comments-6.jpg";
import post3AuthorIMG from "../img/blog/blog-author.jpg";
//
import post4InsideIMG1 from "../img/blog/blog-4.jpg";
import post4InsideIMG2 from "../img/blog/blog-inside-post.jpg";
import post4CommentIMG1 from "../img/blog/comments-1.jpg";
import post4CommentIMG2 from "../img/blog/comments-2.jpg";
import post4CommentIMG3 from "../img/blog/comments-3.jpg";
import post4CommentIMG4 from "../img/blog/comments-4.jpg";
import post4CommentIMG5 from "../img/blog/comments-5.jpg";
import post4CommentIMG6 from "../img/blog/comments-6.jpg";
import post4AuthorIMG from "../img/blog/blog-author.jpg";
//
import blogRecent1 from "../img/blog/blog-recent-1.jpg";
import blogRecent2 from "../img/blog/blog-recent-2.jpg";
import blogRecent3 from "../img/blog/blog-recent-3.jpg";
import blogRecent4 from "../img/blog/blog-recent-4.jpg";
import blogRecent5 from "../img/blog/blog-recent-5.jpg";

import { useTranslation } from "react-i18next";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function BlogSingle() {
  const { t } = useTranslation();
  const { id } = useParams();

  const posts = [
    {
      id: "1",
      postIMG1: post1InsideIMG1,
      postIMG2: post1InsideIMG2,
      author: "blog.posts.0.author",
      title: "blog.posts.0.title",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "blog.posts.0.description",
      authorDescription: "blog.posts.0.status",
      authorIMG: post1AuthorIMG,
      date: "blog.posts.0.date",
      comments: 12,
      content: [
        "blog.posts.0.paragraph_1",
        "blog.posts.0.paragraph_2",
        "blog.posts.0.quote",
        "blog.posts.0.paragraph_3",
        "blog.posts.0.subtitle_1",
        "blog.posts.0.paragraph_4",
        "blog.posts.0.subtitle_2",
        "blog.posts.0.paragraph_5",
        "blog.posts.0.paragraph_6",
      ],
      tags: [
        "blog.posts.0.tags.0",
        "blog.posts.0.tags.1",
        "blog.posts.0.tags.2",
        "blog.posts.0.tags.3",
      ],
      all_comments: [
        {
          user: "blog.posts.0.all_comments.0.user",
          userIMG: post1CommentIMG1,
          date: "blog.posts.0.all_comments.0.date",
          comment: "blog.posts.0.all_comments.0.comment",
          reply: "blog.posts.0.all_comments.0.reply",
        },
        {
          user: "blog.posts.0.all_comments.1.user",
          userIMG: post1CommentIMG2,
          date: "blog.posts.0.all_comments.1.date",
          comment: "blog.posts.0.all_comments.1.comment",
          reply: {
            user: "blog.posts.0.all_comments.1.reply.user",
            userIMG: post1CommentIMG3,
            date: "blog.posts.0.all_comments.1.reply.date",
            comment: "blog.posts.0.all_comments.1.reply.comment",
            reply: {
              user: "blog.posts.0.all_comments.1.reply.reply.user",
              userIMG: post1CommentIMG4,
              date: "blog.posts.0.all_comments.1.reply.reply.date",
              comment: "blog.posts.0.all_comments.1.reply.reply.comment",
              reply: "blog.posts.0.all_comments.1.reply.reply.reply",
            },
          },
        },
        {
          user: "blog.posts.0.all_comments.2.user",
          userIMG: post1CommentIMG5,
          date: "blog.posts.0.all_comments.2.date",
          comment: "blog.posts.0.all_comments.2.comment",
          reply: "blog.posts.0.all_comments.2.reply",
        },
        {
          user: "blog.posts.0.all_comments.3.user",
          userIMG: post1CommentIMG6,
          date: "blog.posts.0.all_comments.3.date",
          comment: "blog.posts.0.all_comments.3.comment",
          reply: "blog.posts.0.all_comments.3.reply",
        },
      ],
    },

    {
      id: "2",
      postIMG1: post2InsideIMG1,
      postIMG2: post2InsideIMG2,
      author: "blog.posts.1.author",
      title: "blog.posts.1.title",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "blog.posts.1.description",
      authorDescription: "blog.posts.1.status",
      authorIMG: post2AuthorIMG,
      date: "blog.posts.1.date",
      comments: 12,
      content: [
        "blog.posts.1.paragraph_1",
        "blog.posts.1.paragraph_2",
        "blog.posts.1.quote",
        "blog.posts.1.paragraph_3",
        "blog.posts.1.subtitle_1",
        "blog.posts.1.paragraph_4",
        "blog.posts.1.subtitle_2",
        "blog.posts.1.paragraph_5",
        "blog.posts.1.paragraph_6",
      ],
      tags: [
        "blog.posts.1.tags.0",
        "blog.posts.1.tags.1",
        "blog.posts.1.tags.2",
        "blog.posts.1.tags.3",
      ],
      all_comments: [
        {
          user: "blog.posts.1.all_comments.0.user",
          userIMG: post2CommentIMG1,
          date: "blog.posts.1.all_comments.0.date",
          comment: "blog.posts.1.all_comments.0.comment",
          reply: "blog.posts.1.all_comments.0.reply",
        },
        {
          user: "blog.posts.1.all_comments.1.user",
          userIMG: post2CommentIMG2,
          date: "blog.posts.1.all_comments.1.date",
          comment: "blog.posts.1.all_comments.1.comment",
          reply: {
            user: "blog.posts.1.all_comments.1.reply.user",
            userIMG: post2CommentIMG3,
            date: "blog.posts.1.all_comments.1.reply.date",
            comment: "blog.posts.1.all_comments.1.reply.comment",
            reply: {
              user: "blog.posts.1.all_comments.1.reply.reply.user",
              userIMG: post2CommentIMG4,
              date: "blog.posts.1.all_comments.1.reply.reply.date",
              comment: "blog.posts.1.all_comments.1.reply.reply.comment",
              reply: "blog.posts.1.all_comments.1.reply.reply.reply",
            },
          },
        },
        {
          user: "blog.posts.1.all_comments.2.user",
          userIMG: post2CommentIMG5,
          date: "blog.posts.1.all_comments.2.date",
          comment: "blog.posts.1.all_comments.2.comment",
          reply: "blog.posts.1.all_comments.2.reply",
        },
        {
          user: "blog.posts.1.all_comments.3.user",
          userIMG: post2CommentIMG6,
          date: "blog.posts.1.all_comments.3.date",
          comment: "blog.posts.1.all_comments.3.comment",
          reply: "blog.posts.1.all_comments.3.reply",
        },
      ],
    },

    {
      id: "3",
      postIMG1: post3InsideIMG1,
      postIMG2: post3InsideIMG2,
      author: "blog.posts.2.author",
      title: "blog.posts.2.title",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "blog.posts.2.description",
      authorDescription: "blog.posts.2.status",
      authorIMG: post3AuthorIMG,
      date: "blog.posts.2.date",
      comments: 12,
      content: [
        "blog.posts.2.paragraph_1",
        "blog.posts.2.paragraph_2",
        "blog.posts.2.quote",
        "blog.posts.2.paragraph_3",
        "blog.posts.2.subtitle_1",
        "blog.posts.2.paragraph_4",
        "blog.posts.2.subtitle_2",
        "blog.posts.2.paragraph_5",
        "blog.posts.2.paragraph_6",
      ],
      tags: [
        "blog.posts.2.tags.0",
        "blog.posts.2.tags.1",
        "blog.posts.2.tags.2",
        "blog.posts.2.tags.3",
      ],
      all_comments: [
        {
          user: "blog.posts.2.all_comments.0.user",
          userIMG: post3CommentIMG1,
          date: "blog.posts.2.all_comments.0.date",
          comment: "blog.posts.2.all_comments.0.comment",
          reply: "blog.posts.2.all_comments.0.reply",
        },
        {
          user: "blog.posts.2.all_comments.1.user",
          userIMG: post3CommentIMG2,
          date: "blog.posts.2.all_comments.1.date",
          comment: "blog.posts.2.all_comments.1.comment",
          reply: {
            user: "blog.posts.2.all_comments.1.reply.user",
            userIMG: post3CommentIMG3,
            date: "blog.posts.2.all_comments.1.reply.date",
            comment: "blog.posts.2.all_comments.1.reply.comment",
            reply: {
              user: "blog.posts.2.all_comments.1.reply.reply.user",
              userIMG: post3CommentIMG4,
              date: "blog.posts.2.all_comments.1.reply.reply.date",
              comment: "blog.posts.2.all_comments.1.reply.reply.comment",
              reply: "blog.posts.2.all_comments.1.reply.reply.reply",
            },
          },
        },
        {
          user: "blog.posts.2.all_comments.2.user",
          userIMG: post3CommentIMG5,
          date: "blog.posts.2.all_comments.2.date",
          comment: "blog.posts.2.all_comments.2.comment",
          reply: "blog.posts.2.all_comments.2.reply",
        },
        {
          user: "blog.posts.2.all_comments.3.user",
          userIMG: post3CommentIMG6,
          date: "blog.posts.2.all_comments.3.date",
          comment: "blog.posts.2.all_comments.3.comment",
          reply: "blog.posts.2.all_comments.3.reply",
        },
      ],
    },

    {
      id: "4",
      postIMG1: post4InsideIMG1,
      postIMG2: post4InsideIMG2,
      author: "blog.posts.3.author",
      title: "blog.posts.3.title",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      description: "blog.posts.3.description",
      authorDescription: "blog.posts.3.status",
      authorIMG: post4AuthorIMG,
      date: "blog.posts.3.date",
      comments: 12,
      content: [
        "blog.posts.3.paragraph_1",
        "blog.posts.3.paragraph_2",
        "blog.posts.3.quote",
        "blog.posts.3.paragraph_3",
        "blog.posts.3.subtitle_1",
        "blog.posts.3.paragraph_4",
        "blog.posts.3.subtitle_2",
        "blog.posts.3.paragraph_5",
        "blog.posts.3.paragraph_6",
      ],
      tags: [
        "blog.posts.3.tags.0",
        "blog.posts.3.tags.1",
        "blog.posts.3.tags.2",
        "blog.posts.3.tags.3",
      ],
      all_comments: [
        {
          user: "blog.posts.3.all_comments.0.user",
          userIMG: post4CommentIMG1,
          date: "blog.posts.3.all_comments.0.date",
          comment: "blog.posts.3.all_comments.0.comment",
          reply: "blog.posts.3.all_comments.0.reply",
        },
        {
          user: "blog.posts.3.all_comments.1.user",
          userIMG: post4CommentIMG2,
          date: "blog.posts.3.all_comments.1.date",
          comment: "blog.posts.3.all_comments.1.comment",
          reply: {
            user: "blog.posts.3.all_comments.1.reply.user",
            userIMG: post4CommentIMG3,
            date: "blog.posts.3.all_comments.1.reply.date",
            comment: "blog.posts.3.all_comments.1.reply.comment",
            reply: {
              user: "blog.posts.3.all_comments.1.reply.reply.user",
              userIMG: post4CommentIMG4,
              date: "blog.posts.3.all_comments.1.reply.reply.date",
              comment: "blog.posts.3.all_comments.1.reply.reply.comment",
              reply: "blog.posts.3.all_comments.1.reply.reply.reply",
            },
          },
        },
        {
          user: "blog.posts.3.all_comments.2.user",
          userIMG: post4CommentIMG5,
          date: "blog.posts.3.all_comments.2.date",
          comment: "blog.posts.3.all_comments.2.comment",
          reply: "blog.posts.3.all_comments.2.reply",
        },
        {
          user: "blog.posts.3.all_comments.3.user",
          userIMG: post4CommentIMG6,
          date: "blog.posts.3.all_comments.3.date",
          comment: "blog.posts.3.all_comments.3.comment",
          reply: "blog.posts.3.all_comments.3.reply",
        },
      ],
    },
  ];

  const test = posts.find((post) => post.id === id);

  if (!test) {
    return <Navigate to="/Tech-Museum/*" />;
  }

  return (
    <>
      <Helmet>
        <title>{t("blog.posts.0.title")}</title>
      </Helmet>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/Tech-Museum/">Home</Link>
              </li>
              <li>
                <Link to="/Tech-Museum/blog">Blog</Link>
              </li>
              <li>{t(posts[id - 1].title)}</li>
            </ol>
            <h2>{t(posts[id - 1].title)}</h2>
          </div>
        </section>

        <section className="inner-page">
          <div className="container">
            <section id="blog" className="blog">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-8 entries">
                    <article className="entry entry-single">
                      <div className="entry-img">
                        <img
                          src={posts[id - 1].postIMG1}
                          alt=""
                          className="img-fluid"
                        />
                      </div>

                      <h2 className="entry-title">{t("blog.posts.0.title")}</h2>

                      <div className="entry-meta">
                        <ul>
                          <li className="d-flex align-items-center">
                            <i className="bi bi-person"></i>{" "}
                            <a href="blog-single.html">
                              {t(posts[id - 1].author)}
                            </a>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="bi bi-clock"></i>{" "}
                            <a href="blog-single.html">
                              <time dateTime="2020-01-01">
                                {t(posts[id - 1].date)}
                              </time>
                            </a>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="bi bi-chat-dots"></i>{" "}
                            <a href="blog-single.html">
                              12 {t("blog.comments")}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="entry-content">
                        <p>{t(posts[id - 1].content[0])}</p>

                        <p>{t(posts[id - 1].content[1])}</p>

                        <blockquote>
                          <p>{t(posts[id - 1].content[2])}</p>
                        </blockquote>

                        <p>{t(posts[id - 1].content[3])}</p>

                        <h3>{t(posts[id - 1].content[4])}</h3>
                        <p>{t(posts[id - 1].content[5])}</p>
                        <img
                          src={posts[id - 1].postIMG2}
                          className="img-fluid"
                          alt=""
                        />

                        <h3>{t(posts[id - 1].content[6])}</h3>
                        <p>{t(posts[id - 1].content[7])}</p>
                        <p>{t(posts[id - 1].content[8])}</p>
                      </div>

                      <div className="entry-footer">
                        <i className="bi bi-folder"></i>
                        <ul className="cats">
                          <li>
                            <a href="#">{t(posts[id - 1].tags[0])}</a>
                          </li>
                        </ul>

                        <i className="bi bi-tags"></i>
                        <ul className="tags">
                          <li>
                            <a href="#">{t(posts[id - 1].tags[1])}</a>
                          </li>
                          <li>
                            <a href="#">{t(posts[id - 1].tags[2])}</a>
                          </li>
                          <li>
                            <a href="#">{t(posts[id - 1].tags[3])}</a>
                          </li>
                        </ul>
                      </div>
                    </article>

                    <div className="blog-author d-flex align-items-center">
                      <img
                        src={posts[id - 1].authorIMG}
                        className="rounded-circle float-left"
                        alt=""
                      />
                      <div>
                        <h4>{t("blog.posts.0.author")}</h4>
                        <div className="social-links">
                          <a href={posts[id - 1].linkedin} target="blank">
                            <i className="bi bi-linkedin icons"></i>
                          </a>
                          <a href={posts[id - 1].github} target="blank">
                            <i className="bi bi-github icons"></i>
                          </a>
                          <a href={posts[id - 1].instagram} target="blank">
                            <i className="biu bi-instagram icons"></i>
                          </a>
                        </div>
                        <p>{t(posts[id - 1].authorDescription)}</p>
                      </div>
                    </div>

                    <div className="blog-comments">
                      <h4 className="comments-count">8 {t("blog.comments")}</h4>

                      <div id="comment-1" className="comment">
                        <div className="d-flex">
                          <div className="comment-img">
                            <img
                              src={posts[id - 1].all_comments[0].userIMG}
                              alt=""
                            />
                          </div>
                          <div>
                            <h5>
                              <a href="">
                                {t(posts[id - 1].all_comments[0].user)}
                              </a>{" "}
                              <a href="#" className="reply">
                                <i className="bi bi-reply-fill"></i>
                                {t("blog.reply")}
                              </a>
                            </h5>
                            <time dateTime="2020-01-01">
                              {t(posts[id - 1].all_comments[0].date)}
                            </time>
                            <p>{t(posts[id - 1].all_comments[0].comment)}</p>
                          </div>
                        </div>
                      </div>

                      <div id="comment-2" className="comment">
                        <div className="d-flex">
                          <div className="comment-img">
                            <img
                              src={posts[id - 1].all_comments[1].userIMG}
                              alt=""
                            />
                          </div>
                          <div>
                            <h5>
                              <a href="">
                                {t(posts[id - 1].all_comments[1].user)}
                              </a>{" "}
                              <a href="#" className="reply">
                                <i className="bi bi-reply-fill"></i>
                                {t("blog.reply")}
                              </a>
                            </h5>
                            <time dateTime="2020-01-01">
                              {t(posts[id - 1].all_comments[1].date)}
                            </time>
                            <p>{t(posts[id - 1].all_comments[1].comment)}</p>
                          </div>
                        </div>

                        <div
                          id="comment-reply-1"
                          className="comment comment-reply"
                        >
                          <div className="d-flex">
                            <div className="comment-img">
                              <img
                                src={
                                  posts[id - 1].all_comments[1].reply.userIMG
                                }
                                alt=""
                              />
                            </div>
                            <div>
                              <h5>
                                <a href="">
                                  {t(posts[id - 1].all_comments[1].reply.user)}
                                </a>{" "}
                                <a href="#" className="reply">
                                  <i className="bi bi-reply-fill"></i>
                                  {t("blog.reply")}
                                </a>
                              </h5>
                              <time dateTime="2020-01-01">
                                {t(posts[id - 1].all_comments[1].reply.date)}
                              </time>
                              <p>
                                {t(posts[id - 1].all_comments[1].reply.comment)}
                              </p>
                            </div>
                          </div>

                          <div
                            id="comment-reply-2"
                            className="comment comment-reply"
                          >
                            <div className="d-flex">
                              <div className="comment-img">
                                <img
                                  src={
                                    posts[id - 1].all_comments[1].reply.reply
                                      .userIMG
                                  }
                                  alt=""
                                />
                              </div>
                              <div>
                                <h5>
                                  <a href="">
                                    {t(
                                      posts[id - 1].all_comments[1].reply.reply
                                        .user
                                    )}
                                  </a>{" "}
                                  <a href="#" className="reply">
                                    <i className="bi bi-reply-fill"></i>
                                    {t("blog.reply")}
                                  </a>
                                </h5>
                                <time dateTime="2020-01-01">
                                  {t(
                                    posts[id - 1].all_comments[1].reply.reply
                                      .date
                                  )}
                                </time>
                                <p>
                                  {t(
                                    posts[id - 1].all_comments[1].reply.reply
                                      .comment
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="comment-3" className="comment">
                        <div className="d-flex">
                          <div className="comment-img">
                            <img
                              src={posts[id - 1].all_comments[2].userIMG}
                              alt=""
                            />
                          </div>
                          <div>
                            <h5>
                              <a href="">
                                {t(posts[id - 1].all_comments[2].user)}
                              </a>{" "}
                              <a href="#" className="reply">
                                <i className="bi bi-reply-fill"></i>
                                {t("blog.reply")}
                              </a>
                            </h5>
                            <time dateTime="2020-01-01">
                              {t(posts[id - 1].all_comments[2].date)}
                            </time>
                            <p>{t(posts[id - 1].all_comments[2].comment)}</p>
                          </div>
                        </div>
                      </div>

                      <div id="comment-4" className="comment">
                        <div className="d-flex">
                          <div className="comment-img">
                            <img
                              src={posts[id - 1].all_comments[3].userIMG}
                              alt=""
                            />
                          </div>
                          <div>
                            <h5>
                              <a href="">
                                {t(posts[id - 1].all_comments[3].user)}
                              </a>{" "}
                              <a href="#" className="reply">
                                <i className="bi bi-reply-fill"></i>
                                {t("blog.reply")}
                              </a>
                            </h5>
                            <time dateTime="2020-01-01">
                              {t(posts[id - 1].all_comments[3].date)}
                            </time>
                            <p>{t(posts[id - 1].all_comments[3].comment)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="reply-form">
                        <h4>{t("blog.leave_a_reply")}</h4>
                        <p>{t("blog.disclaimer")}</p>
                        <form action="">
                          <div className="row">
                            <div className="col-md-6 form-group">
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder={t("blog.name")}
                              />
                            </div>
                            <div className="col-md-6 form-group">
                              <input
                                name="email"
                                type="text"
                                className="form-control"
                                placeholder={t("blog.email")}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col form-group">
                              <input
                                name="website"
                                type="text"
                                className="form-control"
                                placeholder={t("blog.website")}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col form-group">
                              <textarea
                                name="comment"
                                className="form-control"
                                placeholder={t("blog.comment")}
                              ></textarea>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            {t("blog.submit")}
                          </button>
                        </form>
                      </div>
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

                      <h3 className="sidebar-title">
                        {t("blog.recent_posts")}
                      </h3>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default BlogSingle;
