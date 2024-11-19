import Comment from "./Comment";

// 나중에 DB가 될것
const comments = [
    {
        name: '홍길동',
        comment: '방가 방가'
    },
    {
        name: '둘리',
        comment: '호이 호이'
    },
    {
        name: '도우너',
        comment: '깐따삐아~'
    },
    {
        name: '희동이',
        comment: '옹아 옹아'
    }
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((k) => {
                    return(
                        <Comment name={k.name} comment={k.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;