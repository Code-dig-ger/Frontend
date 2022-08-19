export async function getBlogs() {
  return fetch('http://143.110.253.225/blog/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

export async function getThisBlog(blog) {
  return fetch(`http://143.110.253.225/blog/${blog}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}
