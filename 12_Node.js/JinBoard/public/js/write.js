document.querySelector('#write-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const content = e.target.content.value;
  const img = e.target.img.files[0];
  const form = new FormData(); // multipart/form-data 타입으로 보냄

  if (!title) {
    return alert('제목을 입력하세요');
  }
  form.append('img', img);
  form.append('title', title);
  form.append('content', content);
    try {
        // const result = await axios.post('/post/write', { title, content });
        const result = await axios.post('/post/write', form);
        console.log(result.data);

        if (!result.data.flag) {
          return alert(result.data.message);
        }
        location.href = '/post'
      } catch (err) {
        console.error(err);
      }
      e.target.title.value = '';
      e.target.content.value = '';
    });
