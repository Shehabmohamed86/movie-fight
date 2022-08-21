const fetshData = async (searshTerm) => {
  const response = await axios.get('http://www.omdbapi.com/',{
    params : {
      apikey : 'b70887da',
      s : searshTerm

    }
  })
  return response.data.Search;
}

input = document.querySelector('input')

const onInput =async (event) => {
 const movies = await fetshData(event.target.value)
 console.log(movies)
}

input.addEventListener('input',debounce(onInput,500))