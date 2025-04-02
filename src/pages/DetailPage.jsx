import React, { useEffect } from 'react'
import DetailBanner from '../components/DetailPage/DetailBanner'
import DetailContent from '../components/DetailPage/DetailContent'
import DetailFooter from '../components/DetailPage/DetailFooter'

const DetailPage = (props) => {

  useEffect(() => {
    //console.log(props);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <main className="detail-page" id="main">
      <DetailBanner data={props.detail} />
      <DetailContent data={props.detail} />
    </main>
    <DetailFooter data={props.detail} />
    </>
  )
}

export default DetailPage
