
function HeartIconBtn({ chk = false }) {
    function handleFavorite() {
        chk = !chk ;
        alert(chk? '좋아요' : '몰라요');
        console.log(chk)
    }
    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'} />
        </button>
    );
}

function CourseItem08({title, description, image, isFavorite}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt='강의 이미지' />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className='course_icons'>
                <HeartIconBtn chk = {isFavorite} />
            </div>
        </article>
    );
}

export default CourseItem08;