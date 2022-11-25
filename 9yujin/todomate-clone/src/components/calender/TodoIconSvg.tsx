interface TodoIconSvgProps {
  colors: string[];
}

const TodoIconSvg = ({ colors }: TodoIconSvgProps) => {
  let fill = [colors[0], colors[0], colors[0], colors[0]];

  switch (colors.length) {
    case 1:
      fill = [colors[0], colors[0], colors[0], colors[0]];
      break;
    case 2:
      fill = [colors[0], colors[1], colors[1], colors[0]];
      break;
    case 3:
      fill = [colors[0], colors[0], colors[1], colors[2]];
      break;
    case 4:
      fill = [colors[0], colors[1], colors[2], colors[3]];
      break;
    default:
      fill = ['#DBDDDF', '#DBDDDF', '#DBDDDF', '#DBDDDF'];
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
        fill={fill[0]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="6.46154"
        cy="14.5387"
        r="6.46154"
        fill={fill[1]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="14.5387"
        cy="14.5387"
        r="6.46154"
        fill={fill[2]}
        fillOpacity={'0.9'}
      />
      <circle
        cx="14.5387"
        cy="6.46154"
        r="6.46154"
        fill={fill[3]}
        fillOpacity={'0.9'}
      />
    </svg>
  );
};

export default TodoIconSvg;
