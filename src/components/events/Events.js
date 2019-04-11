import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <section id="programs" className="normal-padding bglight">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12 text-center">
                            <div className="heading-title wow fadeInUp" data-wow-delay="300ms">
                                <h3>Our Events</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 wow fadeIn" data-wow-delay="400ms">
                            <div className="center programs sarkar-gumbad-bg text-center center-block">
                                <div className="top20 bottom20 left10 right10">
                                    <div className="programsBg">
                                        <h4>SATARVI SHAREEF</h4>
                                        <p className="top10">MONTHLY</p>
                                        <a href="#portfolio_top" className="top10 button btnwhite-hole wow fadeInUp" data-wow-delay="450ms">learn more</a>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-3 wow fadeIn" data-wow-delay="300ms">
                            <div className="center programs khuwasahab-gumbad-bg text-center center-block">
                                <div className="top20 bottom20 left10 right10">
                                    <div className="programsBg">
                                        <h4>CHATI SHAREEF</h4>
                                        <p className="top10">MONTHLY</p>
                                        <a href="#portfolio_top" className="top10 button btnwhite-hole wow fadeInUp" data-wow-delay="350ms">learn more</a>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-3 wow fadeIn" data-wow-delay="300ms">
                            <div className="center programs ghouseazam-gumbad-bg text-center center-block">
                                <div className="top20 bottom20 left10 right10">
                                    <div className="programsBg">
                                        <h4>GIYARVI SHAREEF</h4>
                                        <p className="top10">YEARLY</p>
                                        <a href="#portfolio_top" className="top10 button btnwhite-hole wow fadeInUp" data-wow-delay="350ms">learn more</a>
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div className="col-lg-3 wow fadeIn" data-wow-delay="500ms">
                            <div className="center programs alahzrat-gumbad-bg text-center center-block">
                                <div className="top20 bottom20 left10 right10">
                                    <div className="programsBg">
                                        <h4>URS ALA HAZRAT</h4>
                                        <p className="top10">YEARLY</p>
                                        <a href="#portfolio_top" className="top10 button btnwhite-hole wow fadeInUp" data-wow-delay="450ms">learn more</a>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12 center-block text-center">
                            <div className="wow fadeInUp" data-wow-delay="300ms">
                              <br />
                              <a href="#portfolio_top" className="button btnsecondary pagescroll wow fadeInUp" data-wow-delay="450ms">more Events</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;
