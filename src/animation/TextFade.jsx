
import { delay, easeIn, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function TextFade({
  direction,
  children,
  staggerChildren = 0.1,
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { duration: 1, delay: 1, easeIn } },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}