interface TodoIconSvgProps {
  colors: string[];
}

const TodoIconSvg = ({ colors }: TodoIconSvgProps) => {
  let fillArray = [colors[0], colors[0], colors[0], colors[0]];
  console.log(colors.length);
  switch (colors.length) {
    case 0:
      fillArray = ['#DBDDDF', '#DBDDDF', '#DBDDDF', '#DBDDDF'];
      break;
    case 1:
      fillArray = [colors[0], colors[0], colors[0], colors[0]];
      break;
    case 2:
      fillArray = [colors[0], colors[1], colors[1], colors[0]];
      break;
    case 3:
      fillArray = [colors[0], colors[0], colors[1], colors[2]];
      break;
    case 4:
      fillArray = [colors[0], colors[1], colors[2], colors[3]];
      break;
  }

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6.46154"
        cy="6.46154"
        r="6.46154"
        fill={fillArray[0]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="6.46154"
        cy="14.5387"
        r="6.46154"
        fill={fillArray[1]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="14.5387"
        cy="14.5387"
        r="6.46154"
        fill={fillArray[2]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="14.5387"
        cy="6.46154"
        r="6.46154"
        fill={fillArray[3]}
        fillOpacity={'0.9'}
      />
    </svg>
  );
};

export default TodoIconSvg;
