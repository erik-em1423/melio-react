
export default function App() {
    // const a = axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
    //   .then(function(response) 
    //   {
    //     console.log(response.data);
    //   });

    const [data, setData] = useState([]);
    //const _products = useRef([]);

    // had some trouble with the saving of state to data with setData. 
    // trying to use old school method with global variable.
    var data2 = [];
    axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
        .then(function (response) {
            console.log("" + response);
            data2 = response.data.docs;
        });
    /* the data will follow this pattern: 
    response.data.docs[0] ...
    */
    useEffect(async () => {
        await axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
            .then(function (response) {
                console.log("" + response);
                var products = ExtractProductList(response.data.docs);
                setData({ data: products });
            });
    }, []);
    // that [] empty list is second argument to the useEffect 
    // so the hook doesn't run again when updating component. 
    // if we want to run again, remove the empty list argument

    function ExtractProductList(data) {
        console.log("" + data);
        var products = [];
        if (data.forEach !== undefined) {
            data.forEach(element => {
                let product = new Product();
                product.name = element.name;
                product.price = element.price;
                product.description = element.description;
                //_products.append(product);
                products.push(product);
            });
        }
        return products;


    }

    // const cardList = _products.map((item) => (
    //   <RCard product={item}></RCard>
    // ));
    // { cardList }

    return (
        <BrowserRouter>
            <div>
                <p>hello!</p>
                <ul>
                    {data2.map(el => (
                        <li key={el.name}>{el.description}</li>
                    ))}
                </ul>
            </div>
        </BrowserRouter>

    );
}
// {
//   data.map((value, index) => {
//     return <RCard />
//   })
// }
export default App;

// commented code section. 

/* this is the new setData where data is response.json. which means attempted json conversion here.
hope it works.
https://www.valentinog.com/blog/hooks/
*/
  // useEffect(async () => {
  //   await axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
  //     .then(function (response) {
  //       console.log("" + response);
  //       setData({ data: response.json() });
  //       ExtractProductList(response.json());
  //     });
  // });