import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FavoryVideo extends Component {
  render() {
    return (
      <>
        <section id="parallex" className="parallax-window">
          <div className="h-100 container-fluid">
            <div className="align-items-center justify-content-center h-100 parallaxt-details row">
              <div className="r-mb-23 col-lg-4">
                <div className="text-left">
                  <NavLink to="/streamit/frontend/react/build/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAAAsCAMAAABYDgToAAACalBMVEUAAAD////////9/f3////8/PzX19f///////////////////////////////////////////////98fHz4+Pj///9paWn////+/v7e3t7////d3d3////////8/PzIyMj////////////////+/v739/erq6v8/Pzu7u7///+lpaX////////////////////////V1dX///////+vr6/////////09PTW1tbo6OiZmZn////x8fH////////T09Pl5eXNzc22trbe3t7k5OSkpKS9vb3s7OzV1dX////CwsLq6ur////IyMisrKybm5vQ0ND///+ysrK6urqMjIykpKSjo6P///+np6fV1dXz8/Pw8PDBwcGrq6unp6eYmJiPj4////8zMzPAwMC8vLzt7e2MjIzg4OB2dnagoKCGhobQ0NB7e3vi4uLi4uLc3NyFhYXS0tLl5eXg4ODNzc11dXXz8/NeXl6mpqZgYGDc3Nxzc3PLy8svLy/y8vKMjIxmZmbW1tbp6en///9SUlLl5eWVlZWZmZlHR0dmZmaBgYH////k5OTg4OD9/f3n5+fz8/Pp6enc3Nz5+fnt7e3e3t77+/vMzMzv7+/r6+vX19fOzs7i4uK6urrKysrFxcXIyMjBwcHT09O8vLz19fW0tLT29vbDw8PV1dW4uLimpqaWlpa/v7+tra2ioqLZ2dmIiIivr6+rq6vQ0NC2traZmZmpqamxsbGbm5uPj4+kpKSgoKCdnZ2EhIR3d3d6enpkZGSSkpKMjIxUVFR+fn5ubm5ycnJeXl5OTk5HR0eBgYFaWlpAQEAhISH52LOMAAAAi3RSTlMA8r8LHBAH74+gdEAy+efSx/XN/r+0/rgqA+q/ZFpW8px4bUtDPyQX83w8OdiHgE8jC9/BwKNGFvHBv6mkloxfPSnz8vDw19a6rZJhXkvy8vDc2cG/vqaTi4mBeXJvY1EzIPvy8e7o4NnRzcvAq52VgG5ZUz4n9vLc2s7Bv7+4qZZxbWk9NBr36m1a/izSxQAAD/VJREFUaN50mPlzE2UYx3FrqxTk0ELVCoKIiqJiURRFPMYDFX5wFMX7GO/7HsfxHMdxxk+y2dzZ3GmONkmbtmmatvSgKaUc4v9ksrtvmt0N32mm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"
                      className="img-fluid"
                      alt="bailey"
                    />
                  </NavLink>
                  <div className="parallax-ratting d-flex align-items-center mt-3 mb-3">
                    <ul className="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
                      <li>
                        <NavLink
                          className="text-primary"
                          to="/streamit/frontend/react/build/"
                        >
                          <i className="fa fa-star" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="pl-2 text-primary"
                          to="/streamit/frontend/react/build/"
                        >
                          <i className="fa fa-star" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="pl-2 text-primary"
                          to="/streamit/frontend/react/build/"
                        >
                          <i className="fa fa-star" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="pl-2 text-primary"
                          to="/streamit/frontend/react/build/"
                        >
                          <i className="fa fa-star" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="pl-2 text-primary"
                          to="/streamit/frontend/react/build/"
                        >
                          <i className="fa fa-star-half-o" aria-hidden="true" />
                        </NavLink>
                      </li>
                    </ul>
                    <span className="text-white ml-3">9.2 (lmdb)</span>
                  </div>
                  <div className="movie-time d-flex align-items-center mb-3 iq-ltr-direction">
                    <div className="badge badge-secondary mr-3">13+</div>
                    <h6 className="text-white">2h 30m</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                  <div className="parallax-buttons">
                    <NavLink
                      className="btn btn-hover"
                      to="/streamit/frontend/react/build/movie-details"
                    >
                      Play Now
                    </NavLink>
                    <NavLink
                      className="btn btn-link"
                      to="/streamit/frontend/react/build/movie-details"
                    >
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="parallax-img">
                  <NavLink to="/streamit/frontend/react/build/movie-details">
                    <img
                      src="https://templates.iqonic.design/streamit/frontend/react/build/static/media/p1.af0d97de.jpg"
                      className="img-fluid w-100"
                      alt="bailey"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FavoryVideo;
