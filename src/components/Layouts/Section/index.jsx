/* eslint-disable react/prop-types */
import { delay, easeIn, motion, useInView } from "framer-motion";

const Section = ({
  title,
  subtitle,
  children,
  titleAnimateOnView = false,
  subtitleAnimateOnView = false,
  childrenAnimateOnView = false,
  titleOnceViewPort = false,
  subtitleOnceViewPort = false,
  childrenOnceViewPort = false,
}) => {
  const titleProps = titleAnimateOnView ? { whileInView: { y: 0, opacity: 1 } } : { animate: { y: 0, opacity: 1 } };
  const subtitleProps = subtitleAnimateOnView ? { whileInView: { y: 0, opacity: 1 } } : { animate: { y: 0, opacity: 1 } };
  const childrenProps = childrenAnimateOnView ? { whileInView: { y: 0, opacity: 1 } } : { animate: { y: 0, opacity: 1 } };
  const titleOnceViewPortProps = titleOnceViewPort ? { once: true } : {};
  const subtitleOnceViewPortProps = subtitleOnceViewPort ? { once: true } : {};
  const childrenOnceViewPortProps = childrenOnceViewPort ? { once: true } : {};

  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
      <div className="mb-10">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          {...titleProps}
          {...titleOnceViewPortProps}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            duration: 1,
          }}
          ease="easeIn"
          className="text-2xl text-center text-active font-bold mb-2"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.h3
            initial={{ y: "100%", opacity: 0 }}
            {...subtitleProps}
            {...subtitleOnceViewPortProps}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            ease="easeIn"
            className="text-[16px] text-center text-slate-700"
          >
            {subtitle}
          </motion.h3>
        )}
      </div>
      <div className="content max-w-[1280px] w-full pl-10 pr-6">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          {...childrenProps}
          {...childrenOnceViewPortProps}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 60,
            duration: 1,
          }}
          ease="easeIn"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
