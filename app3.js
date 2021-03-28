const [data, setData] = useState({});

useEffect(() => {
    fetch("https://falconx-development.coffee4tech.net/products/public?country=GB")
        .then(response => response.json())
        .then(data => setData(data));
});

return (
    <div>
        <ul>
            {data}
        </ul>
    </div>
);
  // {
  //   data.map(el => (
  //     <li key={el.id}>{el.title}</li>
  //   ))
  // }