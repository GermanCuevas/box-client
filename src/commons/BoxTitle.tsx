import React from 'react'
interface box {
  titleBox?: string
  dateBox?: string
  titleBoxClasses?: string
  dateBoxClasses?: string
  boxClasses?: string
}

export default function BoxTitle({
  titleBox,
  dateBox,
  titleBoxClasses,
  dateBoxClasses,
  boxClasses
}: box) {
  return (
    <div className="bg-lightPurple flex justify-center items-center rounded-t-[15px]">
      <div
        className={`w-[30rem] h-[3.5rem] flex ${boxClasses} items-center  font-Roboto text-darkGreen`}
      >
        <h2 className={titleBoxClasses}>{titleBox}</h2>
        {dateBox && <h2 className={dateBoxClasses}>{dateBox}</h2>}
      </div>
    </div>
  )
}
