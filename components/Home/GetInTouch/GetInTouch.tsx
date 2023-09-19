import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  em,
  Container,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

const bg =
  'https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';
export function GetInTouch() {
  return (
    <Paper shadow="md" radius="lg" py={em('120px')} bg="gray.1">
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
            <div style={{ zIndex: 2, position: 'relative', color: '#fff' }}>
              <Text fz="lg" fw={700} className={classes.title} c="#fff">
                Contact information
              </Text>

              <ContactIconsList />
            </div>
          </div>

          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Subject" placeholder="Subject" required />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Container>
    </Paper>
  );
}
