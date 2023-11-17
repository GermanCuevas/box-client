interface check {
  width?: string
  height?: string
  color?: string
  classNameCheck?: string
}

export function CheckOK({ width, height, color, classNameCheck }: check) {
  return (
    <div className={classNameCheck}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || '20'}
        height={height || '20'}
        viewBox="0 0 24 24"
        fill={color || 'rgba(0, 0, 0, 1)'}
        transform=""
      >
        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
      </svg>
    </div>
  )
}

export function CheckOff({ classNameCheck }: check) {
  return <div className={`rounded-full ${classNameCheck}`}></div>
}

// flecha  lemonCommon
export function ChevronDownSmall({ width, height, color }: check) {
  return (
    <svg
      width={width || '14'}
      height={height || '8'}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Stroke 5"
        d="M0.34362 0.33213C0.758879 -0.0716676 1.40739 -0.107106 1.8636 0.224929L1.99427 0.335563L6.9986 5.24423L12.0057 0.335563C12.4192 -0.069958 13.0676 -0.108094 13.5252 0.222041L13.6564 0.33213C14.0716 0.735928 14.1107 1.36908 13.7726 1.816L13.6599 1.94407L7.82708 7.66444C7.41234 8.07118 6.76163 8.10816 6.30399 7.77537L6.17292 7.66444L0.340105 1.94407C-0.114738 1.498 -0.113164 0.776307 0.34362 0.33213Z"
        fill={color || '#24424D'}
      />
    </svg>
  )
}

export function ChevronDownBig({ width, height, color }: check) {
  return (
    <svg
      width={width || '24'}
      height={height || '12'}
      viewBox="0 0 24 12"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M2 2L12 10L22 2"
        stroke="#24424D"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function ArrowBack({ width, height, color }: check) {
  return (
    <svg
      width={width || '15'}
      height={height || '13'}
      viewBox="0 0 15 13"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Combined Shape"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0366 7.35815C14.5807 7.29356 15 6.88545 15 6.39162C15 5.85291 14.501 5.41619 13.8854 5.41619L3.90271 5.41619L7.6712 1.85182L7.78193 1.73048C8.11426 1.30686 8.07879 0.704673 7.67464 0.319076C7.23007 -0.10508 6.50774 -0.106542 6.06127 0.315812L0.335864 5.732L0.224835 5.85371C-0.108248 6.27866 -0.0712385 6.88289 0.335864 7.268L6.06127 12.6842L6.18946 12.7889C6.63678 13.1028 7.27048 13.0665 7.67464 12.6809L7.78482 12.5591C8.11525 12.1342 8.07708 11.5321 7.6712 11.1482L3.67578 7.36706L13.8854 7.36706L14.0366 7.35815Z"
        fill="#24424D"
      />
    </svg>
  )
}

export function EyeClose({ width, height, color }: check) {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99998 6.22987C8.60766 6.0849 9.2736 6.00006 9.99998 6.00006C12.7879 6.00006 14.6853 7.24984 15.8167 8.35223C16.3833 8.90432 16.6666 9.18037 16.6666 10.0001C16.6666 10.8197 16.3833 11.0958 15.8167 11.6479C14.6853 12.7503 12.7879 14.0001 9.99998 14.0001C7.21206 14.0001 5.31462 12.7503 4.18324 11.6479C3.61662 11.0958 3.33331 10.8197 3.33331 10.0001C3.33331 9.18037 3.61662 8.90432 4.18324 8.35223C4.50406 8.03963 4.88647 7.71519 5.33331 7.41075"
        stroke="#24424D"
        stroke-linecap="round"
      />
      <path
        d="M12 10.0001C12 11.1046 11.1046 12.0001 10 12.0001C8.89543 12.0001 8 11.1046 8 10.0001C8 8.89549 8.89543 8.00006 10 8.00006C11.1046 8.00006 12 8.89549 12 10.0001Z"
        stroke="#24424D"
      />
      <line x1="1.67861" y1="16.4728" x2="16.9995" y2="3.617" stroke="#24424D" />
    </svg>
  )
}

export function EyeOpen({ width, height, color }: check) {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 6.22981C8.60769 6.08484 9.27363 6 10 6C12.7879 6 14.6854 7.24978 15.8167 8.35217C16.3834 8.90426 16.6667 9.18031 16.6667 10C16.6667 10.8197 16.3834 11.0957 15.8167 11.6478C14.6854 12.7502 12.7879 14 10 14C7.21209 14 5.31465 12.7502 4.18327 11.6478C3.61665 11.0957 3.33334 10.8197 3.33334 10C3.33334 9.18031 3.61665 8.90426 4.18327 8.35217C4.50409 8.03957 4.8865 7.71513 5.33334 7.41069"
        stroke="#24424D"
        stroke-linecap="round"
      />
      <path
        d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
        stroke="#24424D"
      />
    </svg>
  )
}

export function Box({ width, height, color }: check) {
  return (
    <svg
      width={width || '36'}
      height={height || '36'}
      viewBox="0 0 36 36"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Home_ Iniciar jornada">
        <path
          id="Vector"
          d="M29.9812 15.6C29.9368 14.0267 29.7872 13.0237 29.2831 12.1677C28.5662 10.9503 27.2752 10.2728 24.6932 8.91782L22.2933 7.65836C20.1865 6.55279 19.1331 6 18 6C16.8669 6 15.8135 6.55279 13.7067 7.65836L11.3068 8.91782C8.72475 10.2728 7.43375 10.9503 6.71688 12.1677C6 13.3851 6 14.9 6 17.9298V18.0702C6 21.1 6 22.6149 6.71688 23.8323C7.43375 25.0497 8.72475 25.7272 11.3068 27.0822L13.7067 28.3416C15.8135 29.4472 16.8669 30 18 30C19.1331 30 20.1865 29.4472 22.2933 28.3416L24.6932 27.0822C27.2752 25.7272 28.5662 25.0497 29.2831 23.8323C29.7872 22.9763 29.9368 21.9733 29.9812 20.4"
          stroke="#24424D"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector_2"
          d="M28.8 12.6L24 15M18 18L7.20001 12.6M18 18V29.4M18 18C18 18 21.2912 16.3544 23.4 15.3C23.6343 15.1828 24 15 24 15M24 15V19.2M24 15L12.6 9"
          stroke="#24424D"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  )
}

export function Trash({ width, height, color }: check) {
  return (
    <svg
      width={width || '31'}
      height={height || '20'}
      viewBox="0 0 31 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6693 4.47368C13.9358 3.61512 14.6548 3 15.5 3C16.3452 3 17.0643 3.61512 17.3307 4.47368"
        stroke="#24424D"
        stroke-linecap="round"
      />
      <path d="M21 5.94737H10" stroke="#24424D" stroke-linecap="round" />
      <path
        d="M19.9216 7.78947L19.624 12.873C19.5095 14.8293 19.4522 15.8074 18.8925 16.4037C18.3328 17 17.4719 17 15.7502 17H15.2498C13.5281 17 12.6673 17 12.1076 16.4037C11.5479 15.8074 11.4906 14.8293 11.3761 12.873L11.0785 7.78947"
        stroke="#24424D"
        stroke-linecap="round"
      />
      <path d="M13.8824 9.63158L14.206 13.3158" stroke="#24424D" stroke-linecap="round" />
      <path d="M17.1177 9.63158L16.7942 13.3158" stroke="#24424D" stroke-linecap="round" />
      <rect x="0.5" y="0.5" width="30" height="19" rx="4.5" stroke="#24424D" />
    </svg>
  )
}

export function CameraPlus({ width, height, color }: check) {
  return (
    <svg
      width={width || '33'}
      height={height || '30'}
      viewBox="0 0 33 30"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 16H12" stroke="#24424D" stroke-width="2" stroke-linecap="round" />
      <path d="M17 11L17 21" stroke="#24424D" stroke-width="2" stroke-linecap="round" />
      <path d="M26.7333 10.9333H25.2" stroke="#24424D" stroke-width="2" stroke-linecap="round" />
      <path
        d="M1 17.1212C1 12.3546 1 9.97122 2.16099 8.25916C2.66359 7.51799 3.30943 6.88162 4.06163 6.38639C5.17811 5.65132 6.57587 5.38858 8.71589 5.29467C9.73712 5.29467 10.6164 4.53217 10.8167 3.54545C11.1171 2.06538 12.436 1 13.9678 1H19.0322C20.564 1 21.8829 2.06538 22.1833 3.54545C22.3836 4.53217 23.2629 5.29467 24.2841 5.29467C26.4241 5.38858 27.8219 5.65132 28.9384 6.38639C29.6906 6.88162 30.3364 7.51799 30.839 8.25916C32 9.97122 32 12.3546 32 17.1212C32 21.8879 32 24.2712 30.839 25.9833C30.3364 26.7244 29.6906 27.3608 28.9384 27.856C27.2008 29 24.782 29 19.9444 29H13.0556C8.21796 29 5.79917 29 4.06163 27.856C3.30943 27.3608 2.66359 26.7244 2.16099 25.9833C1.83307 25.4997 1.59777 24.9626 1.42893 24.3333"
        stroke="#24424D"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}

export function ArrowLeftBox({ width, height, color }: check) {
  return (
    <svg
      width={width || '19'}
      height={height || '20'}
      viewBox="0 0 19 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.02937 10.7924C5.50936 10.3921 5.50936 9.6079 6.02937 9.20759L10.14 6.04322C10.7976 5.53703 11.75 6.00579 11.75 6.83563L11.75 13.1644C11.75 13.9942 10.7976 14.463 10.14 13.9568L6.02937 10.7924Z"
        stroke="#24424D"
        stroke-linejoin="round"
      />
      <rect x="0.5" y="0.5" width="18" height="19" rx="4.5" stroke="#24424D" />
    </svg>
  )
}

export function ArrowRightBox({ width, height, color }: check) {
  return (
    <svg
      width={width || '19'}
      height={height || '20'}
      viewBox="0 0 19 20"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 37420">
        <path
          id="Polygon 5"
          d="M12.9706 10.7924C13.4906 10.3921 13.4906 9.6079 12.9706 9.20759L8.85999 6.04322C8.20243 5.53703 7.25 6.00579 7.25 6.83563L7.25 13.1644C7.25 13.9942 8.20243 14.463 8.85999 13.9568L12.9706 10.7924Z"
          stroke="#24424D"
          stroke-linejoin="round"
        />
        <rect
          id="Rectangle 39549"
          x="-0.5"
          y="0.5"
          width="18"
          height="19"
          rx="4.5"
          transform="matrix(-1 0 0 1 18 0)"
          stroke="#24424D"
        />
      </g>
    </svg>
  )
}

export function ChevronBox({ width, height, color }: check) {
  return (
    <svg
      width={width || '26'}
      height={height || '18'}
      viewBox="0 0 26 18"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 37426">
        <path
          id="Vector"
          d="M7 6L13 12L19 6"
          stroke="#24424D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          id="Rectangle 39549"
          x="0.5"
          y="0.5"
          width="25"
          height="17"
          rx="4.5"
          stroke="#24424D"
        />
      </g>
    </svg>
  )
}

export function BoxTitle({ width, height, color }: check) {
  return (
    <svg
      width={width || '81'}
      height={height || '30'}
      viewBox="0 0 81 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 37383">
        <path
          id="Vector"
          d="M23.7449 13.667C23.5154 12.9774 23.213 12.3692 22.8379 11.8425C22.4628 11.3158 22.0261 10.8652 21.5334 10.4959C21.0407 10.1267 20.52 9.82263 19.9769 9.58914C19.4338 9.35566 18.8851 9.1819 18.3364 9.0733C17.7877 8.96471 17.2614 8.90498 16.7687 8.90498H5.22937V0H0V22.876C0 23.7448 0.111978 24.5321 0.341533 25.2271C0.571088 25.9222 0.873427 26.5357 1.25415 27.0624C1.63488 27.5891 2.07719 28.0398 2.5699 28.4091C3.0682 28.7783 3.5833 29.0824 4.12639 29.3158C4.66948 29.5493 5.21817 29.7231 5.76687 29.8317C6.31556 29.9403 6.84185 30 7.33456 30H16.7631C17.6589 30 18.4652 29.8914 19.1762 29.6688C19.8873 29.4462 20.5144 29.1529 21.0575 28.7837C21.6006 28.4145 22.0653 27.9855 22.446 27.5077C22.8267 27.0244 23.1402 26.5249 23.381 25.9982C23.6218 25.4715 23.8009 24.9448 23.9129 24.4072C24.0249 23.8751 24.0865 23.3647 24.0865 22.8869V16.0235C24.0865 15.1548 23.9745 14.3729 23.7449 13.6833V13.667ZM18.8571 22.8706C18.8571 23.4842 18.6723 23.9783 18.3028 24.3529C17.9333 24.7276 17.4238 24.9176 16.7631 24.9176H7.33456C6.72988 24.9176 6.23158 24.733 5.82846 24.3638C5.42533 23.9946 5.22377 23.495 5.22377 22.8706V13.9765H16.7631C17.379 13.9765 17.8829 14.1557 18.2692 14.514C18.6555 14.8724 18.8515 15.3665 18.8515 16.0072V22.8706H18.8571Z"
          fill={color || '#24424D'}
        />
        <path
          id="Vector_2"
          d="M51.7859 22.698C51.7859 23.5885 51.6739 24.3955 51.4444 25.1079C51.2149 25.8203 50.9126 26.4492 50.5376 26.9891C50.1626 27.5289 49.726 27.9909 49.2334 28.3693C48.7352 28.7478 48.2202 29.0594 47.6772 29.2988C47.1343 29.5381 46.5857 29.7162 46.0259 29.8275C45.4718 29.9388 44.9456 30 44.4474 30H35.0211C34.299 30 33.5041 29.872 32.6477 29.6216C31.7912 29.3711 30.9964 28.9537 30.2631 28.3749C29.5298 27.7961 28.9253 27.0447 28.4327 26.1153C27.9401 25.1914 27.6994 24.056 27.6994 22.7091V15.6742C27.6994 14.3441 27.9457 13.2142 28.4327 12.2848C28.9197 11.3609 29.5298 10.604 30.2631 10.0252C30.9964 9.44635 31.7856 9.02893 32.6477 8.77848C33.5041 8.52803 34.2934 8.40002 35.0211 8.40002H44.4474C45.7852 8.40002 46.9272 8.63934 47.862 9.11798C48.8023 9.59662 49.558 10.2033 50.1346 10.9268C50.7111 11.6559 51.131 12.4406 51.3884 13.2977C51.6515 14.1493 51.7803 14.9451 51.7803 15.6742V22.7091L51.7859 22.698ZM46.5577 15.7021C46.5577 14.9841 46.3786 14.4498 46.0147 14.1047C45.6509 13.7597 45.1303 13.5871 44.4474 13.5871H35.0602C34.3605 13.5871 33.8344 13.7652 33.4705 14.1159C33.1067 14.4665 32.9276 14.9841 32.9276 15.6631V22.698C32.9276 23.377 33.1067 23.8946 33.4705 24.2564C33.8344 24.6181 34.3605 24.7962 35.0602 24.7962H44.4474C45.1583 24.7962 45.6845 24.6181 46.0371 24.2564C46.3842 23.8946 46.5577 23.377 46.5577 22.698V15.7021Z"
          fill={color || '#24424D'}
        />
        <path
          id="Vector_3"
          d="M79.4789 8.40002L69.9014 18.5909L80.6896 30H73.3452L66.2463 22.4681L59.1475 30H51.7859L62.5513 18.552L53.0138 8.40559H60.3182L66.2064 14.6581L72.1345 8.40559H79.4789V8.40002Z"
          fill={color || '#24424D'}
        />
      </g>
    </svg>
  )
}

export function BoxTitleLogin({ width, height }: check) {
  return (
    <svg
      width={width || '184'}
      height={height || '49'}
      viewBox="0 0 184 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Capa_1">
        <g clip-path="url(#clip0_7_3228)">
          <g id="Group">
            <path
              id="Vector"
              d="M94.2008 22.3308C93.8362 21.2041 93.356 20.2104 92.7603 19.3498C92.1645 18.4892 91.4709 17.7528 90.6884 17.1496C89.906 16.5463 89.079 16.0494 88.2165 15.6679C87.354 15.2864 86.4826 15.0025 85.6112 14.8251C84.7398 14.6477 83.9039 14.5501 83.1215 14.5501H64.7953V0H56.4902V37.3777C56.4902 38.7972 56.6681 40.0836 57.0326 41.2193C57.3972 42.3549 57.8774 43.3574 58.482 44.218C59.0867 45.0786 59.7891 45.815 60.5716 46.4182C61.363 47.0215 62.181 47.5184 63.0435 47.8999C63.9061 48.2814 64.7775 48.5653 65.6489 48.7427C66.5203 48.9201 67.3561 49.0177 68.1386 49.0177H83.1126C84.5353 49.0177 85.8157 48.8403 86.945 48.4765C88.0742 48.1128 89.0701 47.6337 89.9326 47.0304C90.7952 46.4271 91.5332 45.7262 92.1378 44.9455C92.7425 44.1559 93.2404 43.3397 93.6228 42.4791C94.0051 41.6185 94.2897 40.7579 94.4675 39.8796C94.6453 39.0101 94.7432 38.1762 94.7432 37.3954V26.1812C94.7432 24.7617 94.5653 23.4842 94.2008 22.3574V22.3308ZM86.4381 37.3688C86.4381 38.3714 86.1447 39.1787 85.5578 39.7909C84.971 40.403 84.1618 40.7136 83.1126 40.7136H68.1386C67.1783 40.7136 66.3869 40.4119 65.7467 39.8086C65.1065 39.2053 64.7864 38.3891 64.7864 37.3688V22.8365H83.1126C84.0907 22.8365 84.8909 23.1293 85.5045 23.7148C86.118 24.3004 86.4292 25.1077 86.4292 26.1546V37.3688H86.4381Z"
              fill="#24424D"
            />
            <path
              id="Vector_2"
              d="M138.082 37.3777C138.082 38.7972 137.904 40.0837 137.54 41.2193C137.175 42.3549 136.695 43.3574 136.099 44.218C135.504 45.0786 134.81 45.815 134.028 46.4182C133.236 47.0215 132.418 47.5184 131.556 47.8999C130.693 48.2814 129.822 48.5653 128.932 48.7427C128.052 48.9202 127.216 49.0177 126.425 49.0177H111.451C110.304 49.0177 109.041 48.8137 107.681 48.4144C106.32 48.0152 105.058 47.3498 103.893 46.4271C102.728 45.5044 101.768 44.3067 100.985 42.8251C100.203 41.3523 99.8204 39.5425 99.8204 37.3954V26.1812C99.8204 24.0608 100.212 22.2598 100.985 20.7782C101.759 19.3055 102.728 18.0989 103.893 17.1762C105.058 16.2535 106.312 15.5881 107.681 15.1888C109.041 14.7896 110.295 14.5856 111.451 14.5856H126.425C128.55 14.5856 130.364 14.967 131.849 15.73C133.343 16.493 134.543 17.4601 135.459 18.6134C136.375 19.7757 137.042 21.0266 137.451 22.3929C137.869 23.7503 138.073 25.019 138.073 26.1812V37.3954L138.082 37.3777ZM129.777 26.2256C129.777 25.0811 129.493 24.2294 128.915 23.6793C128.337 23.1293 127.51 22.8542 126.425 22.8542H111.513C110.402 22.8542 109.566 23.1381 108.988 23.6971C108.41 24.256 108.125 25.0811 108.125 26.1635V37.3777C108.125 38.4601 108.41 39.2852 108.988 39.8619C109.566 40.4385 110.402 40.7224 111.513 40.7224H126.425C127.554 40.7224 128.39 40.4385 128.95 39.8619C129.502 39.2852 129.777 38.4601 129.777 37.3777V26.2256Z"
              fill="#24424D"
            />
            <path
              id="Vector_3"
              d="M182.115 14.5589L167.203 30.8124L184 49.0089H172.565L161.512 36.9962L150.46 49.0089H138.998L155.759 30.7503L140.91 14.5678H152.283L161.45 24.5399L170.68 14.5678H182.115V14.5589Z"
              fill="#24424D"
            />
          </g>
          <g id="Group_2">
            <path
              id="Vector_4"
              d="M40.636 0.0178146H8.39395C3.7581 0.0178146 0 3.7675 0 8.39297V40.5628C0 45.1883 3.7581 48.938 8.39395 48.938H40.636C45.2718 48.938 49.0299 45.1883 49.0299 40.5628V8.39297C49.0299 3.7675 45.2718 0.0178146 40.636 0.0178146Z"
              fill="#24424D"
            />
            <g id="Group_3">
              <path
                id="Vector_5"
                d="M20.4603 23.2535C20.4958 21.6654 22.621 20.7959 22.621 20.7959C22.621 20.7959 30.8994 16.1204 35.2208 13.5298C36.1989 12.9531 37.0081 12.7579 37.5683 12.7136C38.0307 12.6781 38.493 12.7845 38.9109 12.9886C39.3644 13.2193 40.0758 13.6096 40.7427 14.1065C40.9027 14.2307 41.0539 14.3637 41.1784 14.5234C42.5211 16.2002 40.0402 17.673 40.0402 17.673L25.8665 25.7997C24.4883 26.4651 23.1901 25.8175 23.1901 25.8175L20.4603 24.3625C20.4603 24.3625 20.4603 23.5108 20.4603 23.2446V23.2535Z"
                fill="#CEC4F4"
              />
              <path
                id="Vector_6"
                d="M32.162 9.15589C31.8508 8.96958 31.4329 8.85424 30.9705 8.85424C30.3747 8.85424 29.9924 9.0583 29.5389 9.33333L16.1121 16.9987C16.1121 16.9987 14.7783 17.7262 14.5027 18.2586C14.3693 18.436 13.8714 18.9772 13.8625 20.379L13.7824 36.6058C13.7824 37.2801 14.1025 37.8124 14.5649 38.1762C14.5649 38.1762 16.3077 39.5247 17.4192 40.0127V23.7237C17.4192 23.7237 17.2681 20.5653 19.9267 18.9506C22.0964 17.6375 34.4205 10.5665 34.4205 10.5665L32.1709 9.16476L32.162 9.15589Z"
                fill="white"
              />
              <path
                id="Vector_7"
                d="M25.7332 5.35868C25.4219 5.17237 25.004 5.05703 24.5416 5.05703C23.9459 5.05703 23.5635 5.26109 23.11 5.53612L9.68328 13.2015C9.68328 13.2015 8.3495 13.929 8.07385 14.4613C7.94047 14.6388 7.44253 15.18 7.43363 16.5817L7.35361 33.0748C7.35361 33.749 7.67371 34.2814 8.13609 34.6451C8.13609 34.6451 9.8789 35.9937 10.9904 36.4816V19.9265C10.9904 19.9265 10.8392 16.7681 13.4979 15.1534C15.6675 13.8403 27.9917 6.76932 27.9917 6.76932L25.742 5.36755L25.7332 5.35868Z"
                fill="#CEC4F4"
              />
              <path
                id="Vector_8"
                d="M26.9158 28.7186H26.8713C26.3022 29.0735 25.4931 29.3042 24.5861 29.3042C23.8036 29.3042 23.0922 29.1356 22.5498 28.8606L20.4514 27.8137V33.2522L22.9855 34.6629C23.6347 34.9823 23.9192 35.1065 24.5505 35.1065C25.1818 35.1065 25.5286 34.9911 26.1155 34.6629L34.5094 29.801L39.6934 27.0418C39.6934 27.0418 41.5607 26.1103 41.6674 24.1141V20.2547L26.9069 28.7098L26.9158 28.7186Z"
                fill="white"
              />
              <path
                id="Vector_9"
                d="M26.9158 37.5108H26.8713C26.3022 37.8656 25.4931 38.0963 24.5861 38.0963C23.8036 38.0963 23.0922 37.9277 22.5498 37.6527L20.4514 36.6058V39.5868C20.4514 41.1039 21.2783 42.5057 22.6032 43.2421L22.9855 43.455C23.6347 43.7744 23.9192 43.8986 24.5505 43.8986C25.1818 43.8986 25.5286 43.7833 26.1155 43.455L34.5094 38.5932L39.6934 35.834C39.6934 35.834 41.3562 35.2129 41.6674 32.9062V29.0469L26.9069 37.5019L26.9158 37.5108Z"
                fill="#CEC4F4"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_7_3228">
          <path d="M0 0H184V49H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
