import React from 'react'

const Home = () => (
  <>
    <p>add an imgur album id to the end of this url</p>
    <code>{'valet.haulhelper.com/<imgur_album_id>'}</code>
    <p>
      if you have the album <code>https://imgur.com/a/vz57EYu</code>
    </p>
    <p>
      then the url will can be either{' '}
      <code>{'valet.haulhelper.com/vz57EYu'}</code> or{' '}
      <code>{'valet.haulhelper.com/a/vz57EYu'}</code>
    </p>
    <p>
      this makes it super easy to swap out <b>imgur.com</b> with{' '}
      <b>valet.haulhelper.com</b> to see the wtc
    </p>
  </>
)

export default Home
