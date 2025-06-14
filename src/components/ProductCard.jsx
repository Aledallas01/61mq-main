// src/components/ProductCard.jsx
import React, { useState, useContext } from 'react';
import Modal from './Modal';

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  // Risolve dinamicamente l’URL dell’immagine in src/assets/images
  const imageUrl = new URL(
    `../assets/images/${product.image}`,
    import.meta.url
  ).href;

  return (
    <>
      {/* CARD */}
      <div
        className="product-card"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyPress={() => setOpen(true)}
      >
        {/* IMMAGINE */}
        <div
          className="product-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={product.name}
        />

        {/* INFORMAZIONI */}
        <div className="product-info">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toFixed(2)}€</p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="modal-content">
            <img
              src={imageUrl}
              alt={product.name}
              className="modal-img"
            />
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-desc">{product.description}</p>
            <p className="modal-price">€ {product.price.toFixed(2)}</p>
          </div>
        </Modal>
      )}
    </>
  );
}
