"use client";

import React from "react";
import { motion } from "framer-motion";
import { Edit2, Mail, MapPin, Briefcase, Users } from "lucide-react";
import Link from "next/link";

export default function Profile({ user }: { user: any }) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header / Cover */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <div className="h-40 bg-gradient-to-r from-indigo-600 to-purple-600" />
          <div className="absolute -bottom-12 left-6 flex items-end gap-4">
            <img
              src={user?.avator}
              alt="avatar"
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <div className="ml-2 text-white drop-shadow-sm">
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-sm opacity-90">
                Product Designer • San Francisco, CA
              </p>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Link
              href={"/user-dashboard/edit-profile"}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-sm px-3 py-2 rounded-full shadow-sm hover:shadow-md"
            >
              <Edit2 size={16} /> Edit profile
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <motion.aside
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm a product designer focused on human-centered interfaces and
                delightful interactions. I love turning complex problems into
                simple, beautiful solutions.
                {JSON.stringify(user, null, 2)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>alex.morgan@example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>Acme Design • Senior Product Designer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Followers</h3>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/47.jpg"
                  />
                </div>
                <div className="text-sm text-gray-700">1.2k followers</div>
              </div>
            </div>
          </motion.aside>

          {/* Main column */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="text-sm text-gray-500">
                    Recent activity and stats
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold">128</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">4.9k</div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold">3</div>
                    <div className="text-xs text-gray-500">Teams</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-gray-50 text-sm">
                  <div className="font-medium">Working on</div>
                  <div className="text-xs text-gray-500">Mobile redesign</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 text-sm">
                  <div className="font-medium">Availability</div>
                  <div className="text-xs text-gray-500">Open to work</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 text-sm">
                  <div className="font-medium">Role</div>
                  <div className="text-xs text-gray-500">Design lead</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Product Design",
                  "UX Research",
                  "Prototyping",
                  "Figma",
                  "Illustration",
                  "Motion",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 bg-indigo-50 rounded-full text-sm text-indigo-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>

              <ul className="space-y-4">
                {[1, 2].map((i) => (
                  <li key={i} className="p-4 rounded-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold">
                              Designing for Accessibility
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago • 120 views
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            UI • Accessibility
                          </div>
                        </div>

                        <p className="mt-2 text-sm text-gray-600">
                          Small tips and tricks for making components accessible
                          while keeping them beautiful.
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Activity</h3>
              <ol className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="font-medium">Joined Acme Design</div>
                    <div className="text-xs text-gray-400">March 2024</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <div className="font-medium">Launched Mobile Redesign</div>
                    <div className="text-xs text-gray-400">July 2025</div>
                  </div>
                </li>
              </ol>
            </div>
          </motion.main>
        </div>

        <footer className="mt-8 text-center text-xs text-gray-400">
          Made with ♥ using Tailwind & Framer Motion
        </footer>
      </div>
    </div>
  );
}
