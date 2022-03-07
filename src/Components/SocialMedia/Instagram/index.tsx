type Types = 'Outline';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const Instagram: React.FC<Props> = ({
  color = '#fff',
  link,
  type = 'Outline',
  width = 30,
}) => {
  function getIcon() {
    switch (type) {
      case 'Outline': {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 40.358 40.349">
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M20.178,12.067A10.345,10.345,0,1,0,30.523,22.412,10.329,10.329,0,0,0,20.178,12.067Zm0,17.071A6.726,6.726,0,1,1,26.9,22.412a6.738,6.738,0,0,1-6.726,6.726ZM33.359,11.644a2.413,2.413,0,1,1-2.413-2.413A2.407,2.407,0,0,1,33.359,11.644Zm6.852,2.449c-.153-3.232-.891-6.1-3.259-8.454S31.73,2.542,28.5,2.38c-3.331-.189-13.316-.189-16.647,0-3.223.153-6.086.891-8.454,3.25S.3,10.852.137,14.084c-.189,3.331-.189,13.316,0,16.647.153,3.232.891,6.1,3.259,8.454s5.222,3.1,8.454,3.259c3.331.189,13.316.189,16.647,0,3.232-.153,6.1-.891,8.454-3.259s3.1-5.222,3.259-8.454c.189-3.331.189-13.307,0-16.638Zm-4.3,20.213a6.809,6.809,0,0,1-3.835,3.835c-2.656,1.053-8.958.81-11.894.81s-9.247.234-11.894-.81a6.809,6.809,0,0,1-3.835-3.835c-1.053-2.656-.81-8.958-.81-11.894s-.234-9.247.81-11.894A6.809,6.809,0,0,1,8.285,6.683c2.656-1.053,8.958-.81,11.894-.81s9.247-.234,11.894.81a6.809,6.809,0,0,1,3.835,3.835c1.053,2.656.81,8.958.81,11.894S36.961,31.659,35.907,34.306Z"
              transform="translate(0.005 -2.238)"
              fill={color}
            />
          </svg>
        );
      }

      default:
        break;
    }
  }

  return link ? (
    <a
      href={link}
      id="instagram-bruno-milano"
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon()}
    </a>
  ) : (
    <div>{getIcon()}</div>
  );
};

export default Instagram;
