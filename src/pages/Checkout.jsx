import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    removeFromCart,
    updateQuantity,
    cartTotal,
    placeOrder,
  } = useCart();

  const cartItems = getCartItemsWithProducts();
  const total = cartTotal();

  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Checkout</h1>
        <div
          style={{
            display: "flex",
            justifyContent:'center',
            margin: "1rem",
            gap:'1rem'
          }}
        >
          <div>
            <h2>Order sum</h2>
            <div>
              {cartItems.map((item) => (
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    margin:'3rem 0',
                    justifyContent: "space-between",
                  }}
                  key={item.product.id}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h3>{item.product.name}</h3>
                      <p>{item.product.price}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <button
                        style={{ padding: "0.3rem" }}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span style={{ padding: "0.3rem" }}>{item.quantity}</span>
                      <button
                        style={{ padding: "0.3rem" }}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                    <button
                      style={{ padding: "0.3rem", background:'red', color:'white' }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'2rem', marginLeft:'3rem'}}>
            <h2>Total</h2>
            <div style={{display:'flex', gap:'1rem'}}>
              <h3>Total:</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
            <button onClick={placeOrder} style={{padding:'0.5rem', color:'white', background:'blue'}}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
