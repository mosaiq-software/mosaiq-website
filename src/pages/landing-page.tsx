import React from "react";
import { Grid, Group, Text, Image, Stack, Button, Container, Title, Divider, Space, List } from '@mantine/core';
import { NavLink } from "react-router-dom";
import { Marquee } from "@gfazioli/mantine-marquee";
import { Reflection } from "@gfazioli/mantine-reflection";

export default function LandingPage() {
    if(!process.env.URL || !process.env.DISCORD || !process.env.EMAIL) {
        throw new Error('Missing environment variables. Please check your .env file.');
    }

    return (
        <Container px="lg">
            <Grid>
                <Grid.Col span={12} pt="lg" pb="lg">
                    <Grid>
                        <Grid.Col span={{ xs: 0, md: 5 }} />
                        <Grid.Col span={{ xs: 12, md: 2 }}>
                            <Stack gap={10}>
                                <Image src="assets/MosaiqLogoTransparent.png" alt="Mosaiq Logo" w={50} h={50} mx="auto" />
                                <Title ta="center" size="md">Mosaiq Software</Title>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={{ xs: 0, md: 5 }} >
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Text ta="center" size="2.33rem">Your Path Starts Here</Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Text ta="center" size="xl">Build real-world software and boost your future</Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Group align="center" justify="center" my="lg">
                                <Reflection>
                                    <Button component={NavLink} to={process.env.DISCORD} target="_blank" size="md">Get Started</Button>
                                </Reflection>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={12} mb="xl">
                            <Text>Whether you're a seasoned developer or just starting out, Mosaiq has a path to make you an industry-ready software engineer with real-world hands-on experience in a wide range of technologies.</Text>
                            <Marquee style={{ fontSize: '2rem' }} my="lg" gap=".5rem">
                                <i className="devicon-html5-plain colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-css3-plain colored"></i>
                                <i className="devicon-react-original colored"></i>
                                <i className="devicon-typescript-plain colored"></i>
                                <i className="devicon-nodejs-plain colored"></i>
                                <i className="devicon-npm-original-wordmark colored"></i>
                                <i className="devicon-express-original colored"></i>
                                <i className="devicon-sqlite-plain colored"></i>
                                <i className="devicon-docker-plain colored"></i>
                                <i className="devicon-figma-plain colored"></i>
                                <i className="devicon-babel-plain colored"></i>
                                <i className="devicon-webpack-plain colored"></i>
                                <i className="devicon-git-plain colored"></i>
                                <i className="devicon-flask-original colored"></i>
                                <i className="devicon-github-original colored"></i>
                                <i className="devicon-jest-plain colored"></i>
                                <i className="devicon-mongodb-plain colored"></i>
                                <i className="devicon-nginx-original colored"></i>
                                <i className="devicon-python-plain colored"></i>
                                <i className="devicon-sequelize-plain colored"></i>
                                <i className="devicon-trello-plain colored"></i>
                                <i className="devicon-ubuntu-plain colored"></i>
                            </Marquee>
                        </Grid.Col>
                        <Grid.Col span={{ xs: 12, md: 4 }}>
                            <Divider />
                            <Title size="lg" py='lg' >Build Something Big</Title>
                            <Text>Join Mosaiq Software — where students turn ideas into professional-grade software. Gain real-world experience, expand your skill set, and supercharge your resume by working on large-scale projects that matter.</Text>
                        </Grid.Col>
                        <Grid.Col span={{ xs: 12, md: 4 }}>
                            <Divider />
                            <Title size="lg" py='lg' >Learn Cutting-Edge Skills</Title>
                            <Text>We’re more than a club — we’re a professional think tank for ambitious students. Collaborate with peers, learn new technologies, and create game-changing apps, games, and websites. Are you ready to level up?</Text>
                        </Grid.Col>
                        <Grid.Col span={{ xs: 12, md: 4 }}>
                            <Divider />
                            <Title size="lg" py='lg' >Turn Passion Into Portfolio.</Title>
                            <Text>Showcase your accomplishments with projects that demonstrate your abilities to future employers.</Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Space />
                            <Space />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Title size="lg" py='lg' >What You’ll Do as a Mosaiq Member</Title>
                            <Text>As a member of Mosaiq Software, you’ll dive into hands-on, collaborative work that mirrors the professional tech world. Here’s what to expect:</Text>
                            <List>
                                <List.Item>
                                    <Title size="md" pt="lg">Kickstart Projects</Title>
                                    <Text>Pitch your ideas or join exciting, ongoing projects like apps, games, or websites. Work from concept to delivery alongside a passionate team.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">Learn and Grow</Title>
                                    <Text>Master cutting-edge tools and technologies through guided workshops, mentorship, and peer learning. Hone the skills that matter most in the tech industry.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">Build Your Portfolio</Title>
                                    <Text>Create software that’s not just functional but also impactful—real-world projects you can proudly showcase to potential employers.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">Connect and Lead</Title>
                                    <Text>Collaborate with like-minded peers and build a professional network. Take leadership roles in teams to strengthen your management and organizational skills.</Text>
                                </List.Item>
                            </List>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Title size="lg" py='lg' >Frequently Asked Questions</Title>
                            <List>
                                <List.Item>
                                    <Title size="md" pt="lg">Do I need to have experience to join?</Title>
                                    <Text>Nope! We welcome students of all skill levels. If you’re passionate about tech and eager to learn, we’d love to have you.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">Is there a membership fee?</Title>
                                    <Text>Never! Mosaiq Software is free for all students. We believe everyone should be able to access the resources they need to succeed.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">How much time do I need to commit?</Title>
                                    <Text>It’s up to you! We encourage diving in deep, but you can contribute as much or as little as you like. We’re here to support you, no matter your schedule.</Text>
                                </List.Item>
                                <List.Item>
                                    <Title size="md" pt="lg">What if I don’t know what I want to work on?</Title>
                                    <Text>Not a problem! We have a variety of projects to choose from, and you can always pitch your own ideas. Our team will help you find the perfect fit.</Text>
                                </List.Item>
                            </List>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Title size="xl" py='lg' ta="center">Ready to jump in?</Title>
                            <Group align="center" justify="center">
                                <Button component={NavLink} to={process.env.DISCORD} target="_blank" size="lg" w="100%">Get Started</Button>
                            </Group>
                            <Text mt="lg" ta="center">Questions? Email us at <a href={`mailto:${process.env.EMAIL}`}>{process.env.EMAIL}</a></Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Group mt="xl" align="center" justify="center">
                                <Text ta="center">© 2024 Mosaiq Software</Text>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    );
}