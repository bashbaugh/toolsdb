const allowCors = handler => async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  return await handler(req, res)
}

export default allowCors