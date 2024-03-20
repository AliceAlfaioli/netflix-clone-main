import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MyFooter = () => {
  return (
    <footer>
      <div class="row text-center mt-5">
        <div class="col-6 offset-3">
          <div class="row">
            <div class="col col-12 text-left mb-2 d-flex gap-2 mb-3">
              <FaFacebook className="icon fs-4" />
              <FaInstagramSquare className="icon fs-4" />
              <FaXTwitter className="icon fs-4" />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>FAQ</button>
                  </p>
                  <p>
                    <button>Investor Relations</button>
                  </p>
                  <p>
                    <button>Way to Watch</button>
                  </p>
                  <p>
                    <button>Corporate Information</button>
                  </p>
                  <p>
                    <button>Netflix Originals</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Help Center</button>
                  </p>
                  <p>
                    <button>Jobs</button>
                  </p>
                  <p>
                    <button>Terms of Use</button>
                  </p>
                  <p>
                    <button>Contact Us</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Account</button>
                  </p>
                  <p>
                    <button>Redeem Gift Cards</button>
                  </p>
                  <p>
                    <button>Privacy</button>
                  </p>
                  <p>
                    <button>Speed Test</button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <button>Media Center</button>
                  </p>
                  <p>
                    <button>Buy Gift Cards</button>
                  </p>
                  <p>
                    <button>Cookie Preference</button>
                  </p>
                  <p>
                    <button>Legal Notices</button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col col-12 text-left mb-2 mt-2 copyright">© 2024 - Netflix </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
