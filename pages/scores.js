import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import axios from 'axios'
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';


const scores = () => {
    const { getCombined, combined, picks, getTeams, getScoreData, scores } = useContext(GlobalContext);
    const [show, setShow] = useState(null);
    const [temp, setTemp] = useState([
        {
            "name": "David Walsh",
            "tiebreaker": "300",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Conor 1",
            "tiebreaker": "113",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Hasbulla",
            "tiebreaker": "74",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Will Smith",
            "tiebreaker": "75",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Pat Mustard",
            "tiebreaker": "73",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Conor 2",
            "tiebreaker": "98",
            "picks": [
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                },
                {
                    "position": 35,
                    "player_id": 120007,
                    "first_name": "Corey",
                    "last_name": "Conners",
                    "country": "CAN",
                    "holes_played": 18,
                    "current_round": 4,
                    "status": "active",
                    "strokes": 283,
                    "updated": "2022-04-05T15:02:01+00:00",
                    "prize_money": "41925",
                    "ranking_points": "18.500",
                    "total_to_par": -5,
                    "rounds": [
                        {
                            "round_number": 1,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "13:09",
                            "total_to_par": -2,
                            "strokes": 70,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 2,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "08:14",
                            "total_to_par": -1,
                            "strokes": 71,
                            "updated": "2022-03-29T23:00:05+00:00"
                        },
                        {
                            "round_number": 3,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "09:54",
                            "total_to_par": 3,
                            "strokes": 75,
                            "updated": "2022-04-02T00:55:03+00:00"
                        },
                        {
                            "round_number": 4,
                            "course_number": 1,
                            "position_round": 35,
                            "tee_time_local": "07:46",
                            "total_to_par": -5,
                            "strokes": 67,
                            "updated": "2022-04-02T22:40:03+00:00"
                        }
                    ]
                }
            ]
        }
    ])
    const tour = {
        "id": 456,
        "type": "Stroke Play",
        "tour_id": 2,
        "name": "Masters Tournament",
        "country": "Augusta, USA",
        "course": "Augusta National Golf Club",
        "start_date": "2022-04-07 00:00:00",
        "end_date": "2022-04-10 00:00:00",
        "timezone": "America/New_York",
        "prize_fund": "",
        "fund_currency": "USD",
        "live_details": ''
    }

    const handleShow = (index) => {
        console.log(show)
        if (show === index) {
            console.log(123)
            setShow(null)
        } else setShow(index)

    }
    useEffect(() => {
        // getCombined()
        // getScoreData()
        // getTeams()

    }, [])

    //function that uses ths id of the player in picks to match the player in scores
    // const matchPlayer = (id) => {
    //     const player = scores.find(p => p.player_id === id)
    //     return player
    // }

    // function to get the sum of total_to_par for each player in picks
    const getTotalToPar = (arr) => {
        let total = 0;
        arr.forEach(player => {
            total += player.total_to_par
        })
        return total
    }


    console.log(picks)

    return (
        <div className=" md:relative mt-8 bg-base-100 card shadow-2xl p-3 ">
            <div className="relative pt-24 pb-2 rounded-2xl shadow-xl overflow-hidden">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/masters-scene.webp"
                    alt="masters scene"
                />
                <div className="absolute inset-0 bg-green-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-mgreen via-mgreen opacity-70" />
                <div className="relative px-8 flex flex-col">
                    <div className="font-bold text-xl  text-ukraineyellow">{tour.name}</div>
                    <div className="font-bold text-md text-base-100 pb-2">{tour.course}</div>
                    <div className="text-xs text-gray-100">Updated 3mins ago</div>

                </div>
            </div>
            <div>
                <div className="flow-root mt-6">
                    <ul className="-my-5 divide-y divide-gray-200">
                        {temp.map((team, i) => (
                            <li key={team.id} className={show === i ? "py-4" : 'py-4'} onClick={() => {
                                handleShow(i)
                                setShow(i)
                            }}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        {/* <img className="h-8 w-8 rounded-full" src={team.imageUrl} alt="" /> */}
                                        {
                                            show != null
                                                ? (<div className="" onClick={() => setShow(null)}>
                                                    <ChevronUpIcon className='w-3' ></ChevronUpIcon>
                                                </div>
                                                )

                                                : (<div className="" onClick={() => setShow(i)}><ChevronDownIcon className='w-3' ></ChevronDownIcon></div>)
                                        }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{team.name}</p>
                                        {/* <p className="text-sm text-gray-500 truncate">{'@' + team.handle}</p> */}
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-ukraineyellow hover:bg-yellow-400"
                                        >
                                            {getTotalToPar(team.picks)}
                                        </a>
                                    </div>
                                </div>
                                {show != null && show === i && (
                                    <div className="flex justify-around w-full mt-1 overflow-x-scrol">{team.picks.map(p => (
                                        <div className="text-xs flex flex-col items-center" key={p.player_id}>
                                            <div className=""><img src={`/headshots/${p.player_id}.webp`} className='rounded-full w-12'></img></div>
                                            <div className="font-medium">{p.last_name}</div>
                                            <div className='text-sm font-bold'>{p.total_to_par}</div>

                                            <div className="text-[0.6rem]">{p.holes_played}</div>
                                        </div>
                                    ))}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className="mt-6">
                    <a
                        href="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        View all
                    </a>
                </div> */}
            </div>
        </div >
    )
}

export default scores