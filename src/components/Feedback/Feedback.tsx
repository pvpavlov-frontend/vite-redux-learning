import { Dislike, Like } from 'assets';
import { useDispatch, useSelector } from 'react-redux';


import { actions } from 'store/redux/feedback/feedbackSlice';
import { feedbackState } from 'store/redux/feedback/selectors';
import { ButtonFlex, ButtonWrap, FeedbackWrapper, Quantity } from './styles';
import Button from 'components/Button';
import ButtonImg from 'components/ButtonImg/ButtonImg';

function Feedback() {
    const dispatch = useDispatch();
    const { likes, dislikes } = useSelector(feedbackState);

    return (
        <FeedbackWrapper>
            <ButtonFlex>
                <ButtonWrap>
                    <ButtonImg
                        onClick={() => dispatch(actions.incrementLikes())}
                        imageUrl={Like}
                        altText='Like'
                    />
                </ButtonWrap>
                <Quantity>
                    {likes}
                </Quantity>
            </ButtonFlex>
            <ButtonFlex>
                <ButtonWrap>
                    <ButtonImg
                        onClick={() => dispatch(actions.incrementDislikes())}
                        imageUrl={Dislike}
                        altText='Dislike'
                    />
                </ButtonWrap>
                <Quantity>
                    {dislikes}
                </Quantity>
            </ButtonFlex>
            <ButtonWrap>
                <Button name="Reset Results" onClick={() => dispatch(actions.resetResults())} />
            </ButtonWrap>
        </FeedbackWrapper>
    );
};

export default Feedback;
