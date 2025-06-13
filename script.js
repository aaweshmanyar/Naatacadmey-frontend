function fixMojibake(text) {
  try {
    return decodeURIComponent(escape(text));
  } catch (e) {
    return text;
  }
}

const loadArticles = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/articles');
    const articles = await res.json();
    const container = document.getElementById('articles-container');

    articles.forEach(article => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${fixMojibake(article.title)}</strong><p>${fixMojibake(article.description)}</p>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error('Failed to load articles:', err);
  }
};

const loadPosts = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/posts');
    const posts = await res.json();
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${fixMojibake(post.title)}</strong><p>${fixMojibake(post.content)}</p>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error('Failed to load posts:', err);
  }
};

loadArticles();
loadPosts();
