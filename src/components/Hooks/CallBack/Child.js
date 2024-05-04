import {memo} from 'react'

const Child = ({callData}) => {

    console.log("i am Child Components");
  return (
    <div>Child</div>
  )
}

export default memo(Child);