import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import NextImage from 'next/image';
import image from './email-banner.svg';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image
        component={NextImage}
        src={image.src}
        alt="Email banner image"
        width={300}
        height={300}
        // sizes="100vw"
        className={classes.image}
      />
    </div>
  );
}
