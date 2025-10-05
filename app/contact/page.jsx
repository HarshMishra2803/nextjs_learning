import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <script>
        {` alert("this is contact page") `}
      </script>
      i am contact page
    </div>
  )
}

export default contact

export const metadata = {
  title: " Contact Facebook - Connect with the World",
  description:
    "This is page where you can contact facebook and we can connect with the world using facebook",
};
