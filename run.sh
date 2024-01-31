
# run.sh - This is script is the first invoked when I build the beta version of the output site
# install.pl -- Main installation script for the LiturgiScript package
# Copyright (C) 2024  Sophia Elizabeth Shapira
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License along
# with this program; if not, write to the Free Software Foundation, Inc.,
# 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

date

cd "$(dirname "${0}")" || exit

X_MODE_TYPE='test'
export X_MODE_TYPE

X_OUTPUT="$(pwd)/out"
X_SCRIP="$(pwd)/scrip"
X_RES_BASE="$(pwd)"
export X_OUTPUT
export X_SCRIP
export X_RES_BASE

cp out/primaria.css .
rm -rf out
mkdir out
cp primaria.css out/.

X_DESTIN_DIR="$( cd out && pwd )"
export X_DESTIN_DIR

sh "${X_RES_BASE}/prep-res.sh"

liturgscr-gener -scf "${X_SCRIP}/main-dx.skd" > out/index.html

date

( ( sh clean.sh ) & ) > /dev/null 2> /dev/null


