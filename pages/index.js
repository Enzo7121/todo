import React, { useState } from "react";
import { Card, Button, Form, Input, Row, Col, message, Avatar } from "antd";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function Home() {
  const [todos, setTodos] = useState([
    {
      title: "test1",
      description: "descripcion",
      createdAt: new Date(),
      id: 2235747,
    },
  ]);

  const handleDelete = (idToDelete) => {
    message.success("Tarea borrada exitosamente");
    setTodos((prev) => prev.filter(({ id }) => id !== idToDelete));
  };

  const rng = () => Math.random() * 5542154864;

  return (
    <div>
      <div style={{ maxWidth: 500, margin: 50 }}>
        <h1>TODO List</h1>
        <Form
          name="todo"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(el) => {
            message.success("Tarea creada exitosamente");
            setTodos((prev) =>
              prev.concat({ ...el, id: rng(), createdAt: new Date() })
            );
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Titulo"
            name="title"
            rules={[
              { required: true, message: "Por favor ingrese un titulo valido" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Descripcion" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Crear tarea
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Row gutter={[16, 16]} style={{ margin: 50 }}>
        {todos.map(({ id, title, description }) => (
          <Col
            key={`todo-${id}`}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
          >
            <Card
              cover={null}
              actions={[
                <DeleteOutlined
                  style={{ padding: 0 }}
                  onClick={() => handleDelete(id)}
                />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={title}
                description={description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}