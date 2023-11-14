import './Banner.css';

export const Banner = (props:any) => {
  const src = props.src;

  return (
    <div className="divBanner">
      <img className="imgBanner img-fluid" src={src} alt="Banner" />
    </div>
  )
}