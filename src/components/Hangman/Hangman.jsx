import Level1 from '../../../dist/assets/Images/1.svg';
import Level2 from '../../../dist/assets/Images/2.svg';
import Level3 from '../../../dist/assets/Images/3.svg';
import Level4 from '../../../dist/assets/Images/4.svg';
import Level5 from '../../../dist/assets/Images/5.svg';
import Level6 from '../../../dist/assets/Images/6.svg';
import Level7 from '../../../dist/assets/Images/7.svg';
import Level8 from '../../../dist/assets/Images/8.svg';
import Level9 from '../../../dist/assets/Images/9.svg';

function Hangman({ step }){
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9];

    return (
        <div className='w-[300px] h-[300px]'>
            <img src={step >= images.length ? images[images.length - 1] : images[step]} />
        </div>
    )
}

export default Hangman;