const result = document.querySelector('.result');

const fetchData = async () => {

    try {
      axios
      //const {data} = await axios.get('/.netlify/functions/1-hello');
      const {data} = await axios.get('/api/1-hello');

      // console.log(data);
      result.textContent = data
    } catch (error) {
      console.log(error.response)
      result.textContent = error.response.status;
    }
}

fetchData()