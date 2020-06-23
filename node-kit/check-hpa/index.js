const axios = require('axios')

const main = async () => {
  while (true) {
    const { data } = await axios.get('http://103cuong.example/node-kit/hpa')
    console.log(data, '🦄')
  }
}

main()
