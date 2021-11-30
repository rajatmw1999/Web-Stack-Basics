function handleShoeChange (category) {
  console.log(category)
  if(category == 'open')
  {
      document.getElementById('closed1').style.display = 'none';
      document.getElementById('closed2').style.display = 'none';
      document.getElementById('closed3').style.display = 'none';
      document.getElementById('open1').style.display = 'block';
      document.getElementById('open2').style.display = 'block';
      document.getElementById('open3').style.display = 'block';
  }
  else if(category == 'closed')
  {
      document.getElementById('closed1').style.display = 'block';
      document.getElementById('closed2').style.display = 'block';
      document.getElementById('closed3').style.display = 'block';
      document.getElementById('open1').style.display = 'none';
      document.getElementById('open2').style.display = 'none';
      document.getElementById('open3').style.display = 'none';
  }
}
