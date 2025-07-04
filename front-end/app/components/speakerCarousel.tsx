import { useSwipeable } from "react-swipeable";
const SpeakerCard = () => {
  return <>Hello</>;
};
export default function SpeakerCarousel() {
  const swiper = useSwipeable({
    onSwiped: (eventData) => console.log(eventData),
  });
  return (
    <div {...swiper} className="flex justify-center">
      Swipe Me Hehe
    </div>
  );
}
