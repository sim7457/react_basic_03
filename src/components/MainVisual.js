import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const MainVisual = ({ basic }) => {
    const option = {
        dots: true,
        arrows: false,
        afterChange: idx => console.log(idx)
    }
    return (
        <section className="MainVisual">
            <Slider >
                {
                    basic.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={it.id}>
                                <div className="inner">
                                    <div className="tit">{it.title}</div>
                                    <strong>{it.desc}</strong>
                                    <em>{it.id}</em>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="Num"></div>
        </section>
    )
}

export default MainVisual;