export const ChildCompProto = (props) => {
  const { itemChildren } = props;
  return itemChildren.map((item) => {
    return (
      <li className="_childList" key={item.id}>
        • {item.name}
      </li>
    );
  });

  return <div>123</div>;
};
