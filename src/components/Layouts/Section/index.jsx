/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

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
  const titleProps = titleAnimateOnView
    ? { whileInView: { y: 0, opacity: 1 } }
    : { animate: { y: 0, opacity: 1 } };
  const subtitleProps = subtitleAnimateOnView
    ? { whileInView: { y: 0, opacity: 1 } }
    : { animate: { y: 0, opacity: 1 } };
  const childrenProps = childrenAnimateOnView
    ? { whileInView: { y: 0, opacity: 1 } }
    : { animate: { y: 0, opacity: 1 } };
  const titleOnceViewPortProps = titleOnceViewPort ? { once: true } : {};
  const subtitleOnceViewPortProps = subtitleOnceViewPort ? { once: true } : {};
  const childrenOnceViewPortProps = childrenOnceViewPort ? { once: true } : {};

  return (
    <div className="flex flex-col items-center justify-center w-full my-8 overflow-hidden">
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
          viewport={{ once: true }}
          className="px-5 mb-2 text-xl font-bold text-center sm:text-2xl text-active"
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
            viewport={{ once: true }}
            className="text-[13px] sm:text-[16px] lg:text-[18px] text-center text-slate-700 px-5"
          >
            {subtitle}
          </motion.h3>
        )}
      </div>
      <div className="content max-w-[1280px] w-full px-4 sm:px-6 lg:px-8">
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
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
